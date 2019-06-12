
const request = require('request');

request({
  url: 'https://api.kintohub.com/callapi/request',
  headers: {
     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXBsb3ltZW50SWQiOiI1Y2ZmNGY3MmYxNTdkMzAwMDE2YzkxYWIiLCJkZXBsb3ltZW50TnVtYmVyIjoiNCIsImVudmlyb25tZW50SWQiOiJlNTVmYWVjYS05YTljLTRkMzktOTBkYy1iYjRhODc3ZjQ5NTQiLCJzZXNzaW9uSWQiOiIxNzZmNmFjNS04Y2M1LTExZTktODc1Yy0wYTU4MGEzODAxMzQiLCJjbGllbnRJZCI6IjFmM2E5YzkxN2UwMTQ2Nzg5OWUxN2UzMTg2YTE3OWM1IiwiYXVkIjoiTWlkZGxld2FyZSIsImV4cCI6MTU2MTUyMDk3NCwiaWF0IjoxNTYwMzExMzc0LCJpc3MiOiJNaWRkbGV3YXJlIiwic3ViIjoie1wiZGVwbG95bWVudElkXCI6XCI1Y2ZmNGY3MmYxNTdkMzAwMDE2YzkxYWJcIixcImRlcGxveW1lbnROdW1iZXJcIjpcIjRcIixcImVudmlyb25tZW50SWRcIjpcImU1NWZhZWNhLTlhOWMtNGQzOS05MGRjLWJiNGE4NzdmNDk1NFwiLFwic2Vzc2lvbklkXCI6XCIxNzZmNmFjNS04Y2M1LTExZTktODc1Yy0wYTU4MGEzODAxMzRcIixcImNsaWVudElkXCI6XCIxZjNhOWM5MTdlMDE0Njc4OTllMTdlMzE4NmExNzljNVwifSJ9.6g4K_3q5KSKQzCUIGv5wEOHbSXZhwdx-mkdkYzNfq5o'
  },
  rejectUnauthorized: false
}, function(err, res) {
      if(err) {
        console.error(err);
      } else {
        console.log(res.body);
      }

});

