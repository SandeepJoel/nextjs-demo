export default function Time() {
  const time = new Date().toLocaleTimeString() as string;

  return <div className="flex justify-content-end m-5">Updated at {time}</div>;
}
