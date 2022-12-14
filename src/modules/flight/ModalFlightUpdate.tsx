import ModalUpdate from '@components/modal/ModalUpdate'
import ModalUpdateChild from '@components/modal/_ModalUpdateChild'
import { IAirport } from '@modules/airport/airport.interface'
import { RootState } from '@store/store'
import { AIRPORT_API, configHeaders, FLIGHT_API } from '@utils/constant'
import * as React from 'react'
import { useSelector } from 'react-redux'
import { data, schema } from './fight.interface'

interface IModalFlightUpdateProps {
  title: string
  id: string | number
}

const ModalFlightUpdate: React.FunctionComponent<IModalFlightUpdateProps> = ({ title, id }) => {
  const [airports, setAirports] = React.useState([])
  const { accessToken } = useSelector((state: RootState) => state.user)
  React.useEffect(() => {
    void (async () => {
      const res = await fetch(AIRPORT_API, {
        method: 'GET',
        ...configHeaders(accessToken),
      })
      const response = await res.json()
      setAirports(
        response.map((airport: IAirport) => ({ id: airport.airportID, value: airport.airportName }))
      )
    })()
  }, [accessToken])

  const formatData = React.useMemo(() => {
    return data.map((item) => {
      if (item.type === 'select') {
        return {
          ...item,
          options: airports,
        }
      }
      return item
    })
  }, [airports])

  return (
    <ModalUpdate title={title}>
      <ModalUpdateChild schema={schema} data={formatData} id={id} url={FLIGHT_API} />
    </ModalUpdate>
  )
}

export default ModalFlightUpdate
