const USERNAME = 'Martins-Jay';
const FROM = '2025-12-01T00:00:00Z'; 
const TO = new Date().toISOString(); 

export async function fetchContributions() {
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `{
        user(login: "${USERNAME}") {
          contributionsCollection(
            from: "${FROM}"
            to: "${TO}"
          ) {
            contributionCalendar {
              weeks {
                contributionDays {
                  date
                  contributionCount
                }
              }
            }
          }
        }
      }`,
    }),
  });

  const json = await res.json();
  return json.data.user.contributionsCollection.contributionCalendar.weeks;
}
