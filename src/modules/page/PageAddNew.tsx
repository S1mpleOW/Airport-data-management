/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable no-nested-ternary */
import Button from '@components/button/Button'
import * as React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { FieldValues, useForm } from 'react-hook-form'
import { AnyObjectSchema } from 'yup'
import Lazy from 'yup/lib/Lazy'
import { IItemValues } from '@customTypes/index'
import Input from '@components/input/Input'
import { configHeaders } from '@utils/constant'
import { RootState } from '@store/store'
import { useSelector } from 'react-redux'
import { formatDate } from '@utils/helper'
import useNotification from '@hooks/useNotification'

interface IPageAddNewProps {
  data: IItemValues[]
  schema: Lazy<any, unknown> | AnyObjectSchema
  id?: string | number
  url: string
}

const PageAddNew: React.FunctionComponent<IPageAddNewProps> = ({ data, schema, id, url }) => {
  const {
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    control,
    reset,
    register,
  } = useForm<FieldValues>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: data.reduce((acc: FieldValues, item) => {
      acc[item.name] = item.defaultValue
      return acc
    }, {}),
  })

  const [notify] = useNotification()

  const { accessToken } = useSelector((state: RootState) => state.user)

  const onSubmit = async (body: FieldValues): Promise<void> => {
    if (isSubmitting || accessToken === null) return
    const dates = data.filter((item) => item.type === 'date')
    let newBody = body
    if (dates.length !== 0) {
      const dateValues: string[] = dates.map((item) => body[item.name])
      const dateKeys: string[] = dates.map((item) => item.name)
      newBody = dateKeys.reduce((acc: FieldValues, item, index) => {
        acc[item] = formatDate(dateValues[index], 'yyyy-MM-dd')
        return acc
      }, body)
    }
    const selects = data.filter((item) => item.type === 'select')

    if (selects.length !== 0) {
      const selectValues: string[] = selects.map((item) => body[item.name])
      const selectKeys: string[] = selects.map((item) => item.key as string)
      if (selectKeys.length === 0) {
        return
      }
      const selectBody = selectKeys.map((key: string, index) => {
        if (key === null || key === undefined) return null
        return {
          [key]: selectValues[index],
        }
      })
      newBody = selects.reduce((acc: FieldValues, item, index) => {
        if (item.key === null || item.key === undefined) return acc
        acc[item.name] = selectBody[index]
        return acc
      }, body)
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(newBody),
        ...configHeaders(accessToken),
      })
      if (response.status === 200) {
        notify('Adding new item successfully', {
          variant: 'success',
        })
        reset(
          data.reduce((acc: FieldValues, item) => {
            acc[item.name] = item.defaultValue
            return acc
          }, {})
        )
      } else {
        notify('Adding new item failed', {
          variant: 'error',
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="mt-5">
      <form className="flex flex-col gap-3 max-w-[800px] mx-auto" onSubmit={handleSubmit(onSubmit)}>
        {data.map((item: IItemValues) => {
          return item.type === 'select' ? (
            <div key={`${item.name}-${item.type}`} className="flex flex-col items-start gap-y-3">
              <label htmlFor={item.name} className="text-sm font-medium cursor-pointer">
                {item.label}
              </label>
              <select
                className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg border-2 focus:border-primary focus:ring-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary transition-all duration-300 ease-linear"
                id={item.name}
                {...register(item.name)}
              >
                <option value="">{item.placeholder}</option>
                {item.options?.map((option) => (
                  <option key={option.value} value={option.id}>
                    {option.value}
                  </option>
                ))}
              </select>
              <p className="text-base text-red-500">
                {errors !== undefined ? (errors[item.name]?.message as string) : ''}
              </p>
            </div>
          ) : (
            <div key={`${item.name}-${item.type}`} className="flex flex-col items-start gap-y-3">
              <label htmlFor={item.name} className="text-sm font-medium cursor-pointer">
                {item.label}
              </label>
              <Input
                control={control}
                type={item.type}
                name={item.name}
                id={item.name}
                placeholder={item.placeholder}
              />
            </div>
          )
        })}
        <Button
          type="submit"
          width="100%"
          style={{
            margin: '0 auto',
          }}
          disabled={!isValid || isSubmitting}
        >
          {isSubmitting ? 'Loading...' : isValid ? 'Add' : 'Please fill all fields'}
        </Button>
      </form>
    </div>
  )
}

export default PageAddNew
