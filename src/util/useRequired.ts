const requiredMessage = (type: string) => {
  return (value: string) => {
    if (value) return true;
    return `${type} is mandatory`
  }
}

export default function(){
  return { requiredMessage }
}
