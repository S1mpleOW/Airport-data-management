/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/label-has-associated-control */
import Button from '@components/button/Button'
import Input from '@components/input/Input'
import { yupResolver } from '@hookform/resolvers/yup'
import { IItemValues } from '@customTypes/index'
import * as React from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { AnyObjectSchema } from 'yup'
import Lazy from 'yup/lib/Lazy'
import { useEffect } from 'react'
import { configHeaders } from '@utils/constant'
import { RootState } from '@store/store'
import { useDispatch, useSelector } from 'react-redux'
import { refetch } from '@store/data.reducer'
import { formatDate } from '@utils/helper'
import { format } from 'date-fns'
import useNotification from '@hooks/useNotification'

interface IModalUpdateChildProps {
  data: IItemValues[]
  schema: Lazy<any, unknown> | AnyObjectSchema
  id: string | number
  url: string
}

const ModalUpdateChild: React.FunctionComponent<IModalUpdateChildProps> = ({
  data,
  schema,
  id,
  url,
}) => {
  const {
    handleSubmit,
    formState: { isSubmitting, isValid, errors },
    control,
    setValue,
    reset,
    register,
    getValues,
  } = useForm<FieldValues>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: data.reduce((acc: FieldValues, item) => {
      acc[item.name] = item.defaultValue
      return acc
    }, {}),
  })
  const { accessToken } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()

  const [notify] = useNotification()

  const onSubmit = async (body: FieldValues): Promise<void> => {
    if (isSubmitting || id === null || id === 0) return
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
      const selectKeys: string[] = selects.map((item) => item.key)
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
      const response = await fetch(`${url}${id}`, {
        method: 'PUT',
        body: JSON.stringify(newBody),
        ...configHeaders(accessToken),
      })
      if (response.status === 200) {
        notify('Update successfully', {
          variant: 'success',
        })
        reset(
          data.reduce((acc: FieldValues, item) => {
            acc[item.name] = item.defaultValue
            return acc
          }, {})
        )
      }
    } catch (err) {
    } finally {
      dispatch(refetch())
    }
  }

  useEffect(() => {
    if (isSubmitting || id === null || id === 0) return
    void (async () => {
      const response = await fetch(`${url}${id}`, {
        method: 'GET',
        ...configHeaders(accessToken),
      })
      if (response.status === 200) {
        const result = await response.json()
        data.forEach((item: IItemValues) => {
          const dateFormat =
            item.type === 'date'
              ? format(new Date(result[item.name].split('/').reverse()), 'yyyy-MM-dd')
              : result[item.name]
          let value = item.type === 'date' ? dateFormat : result[item.name]
          const selectFormat =
            item.type === 'select' ? result[item.name][item.key] : result[item.name]
          value = item.type === 'select' ? selectFormat : value
          console.log(value)
          setValue(item.name, value)
        })
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken, data, id, url])
  console.log(getValues())
  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
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

      <Button type="submit">
        {isSubmitting ? 'Loading...' : isValid ? 'Update' : 'Please fill all fields'}
      </Button>
    </form>
  )
}

export default ModalUpdateChild
