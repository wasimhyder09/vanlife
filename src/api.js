export async function getVans(id) {
  const url = id ? `/api/vans/${id}` : "/api/vans"
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error("Failed to fetch vans")
  }
  const data = await res.json()
  return data.vans
}

export async function getHostVans(id) {
  const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error("Failed to fetch vans")
  }
  const data = await res.json()
  return data.vans
}

export async function loginUser(creds) {
  const res = await fetch("/api/login",
    {method: "post", body: JSON.stringify(creds)}
  )
  const data = await res.json()

  if(!res.ok) {
    throw new Error(data.message)
  }
  return data
}
