import { Text } from '@chakra-ui/react'

type TextInfoProps = {
  label: string
  value: string | number | undefined
}

export default function TextInfo({ label, value }: TextInfoProps) {
  return (
    <Text fontSize="lg" fontWeight="bold">
      {label}:{' '}
      <Text as="span" fontWeight="300">
        {value || ' - '}
      </Text>
    </Text>
  )
}
