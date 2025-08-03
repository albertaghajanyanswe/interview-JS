function unflattenObject(flat: Record<string, any>): Record<string, any> {
  try {
    const result: Record<string, any> = {}

    for (const key in flat) {
      const value = flat[key]
      const parts = key.split('_')

      let current = result
      for (let i = 0; i < parts.length; i++) {
        const part = parts[i]

        if (i === parts.length - 1) {
          current[part] = value
        } else {
          current[part] = current[part] ?? {}
          current = current[part]
        }
      }
    }

    return result
  } catch (error) {
    console.error('Error unflattening object:', error)
    return {}
  }
}

console.log(unflattenObject({ a: 1, 'b.c': 2, 'b.d.e': 3, 'b.d.f.g': 4, h: 5 }))