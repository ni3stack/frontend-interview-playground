export const delayedFetch = (url:string,options:any) => {
  const query = new URL(url).searchParams.get("q");

  const delay = query === "java" ? 3000 : 200;

  return new Promise((resolve, reject) => {
    const timerId = setTimeout(() => {
      fetch(url,options)
        .then(resolve)
        .catch(reject)
    },delay);

    options?.signal?.addEventListener("abort", () => {
      clearTimeout(timerId);
      reject(new DOMException("Aborted", "AbortError"))
    });
  });
}