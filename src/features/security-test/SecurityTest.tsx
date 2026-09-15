import { useState } from "react";

export default function SecurityTest() {
  const [ result, setResult ] = useState("");

  const testCsrf = async () => {
    try {
      const response = await fetch("http://taskflow.test:5001/api/auth/test-csrf", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          action: "test-csrf"
        })
      });
      const data = await response.json();
      setResult(
        `Status: ${response.status} - ${JSON.stringify(data)}`
      );
    }catch(error) {
      setResult(`Request failed - ${error}`)
    }
  }

  return (
    <div>
      <p>Validating CSRF security for TaskFlow</p>
      <button onClick={testCsrf}>
        Send CSRF Request
      </button>
      <p>{result}</p>
    </div>
  );
}