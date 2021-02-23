import { useState, useEffect } from 'react'

const useImport = (path: string | string[]): string | string[] => {
  const [data, setData] = useState<string | string[]>()

  useEffect(() => {
    void (async () => {
      try {
        const res = await (Array.isArray(path)
          ? Promise.all(path.map(async (path) => (await import(path)).default))
          : import(path).then((Module) => Module.default))
        setData(res)
      } catch (error) {
        console.log(error.message)
      }
    })()
  }, [path])

  return data as string | string[]
}
export default useImport
