Debouncing

typing slow = 200ms
typing fast = 30ms

Performance:
-iphone pro max = 14 letter * 1000 = 14000
-with debouncing  = 3 API calls *1000  = 3000

Debouncing with 200ms
- if difference between 2 key stroke is < 200ms - DECLINE API call
- > 200ms make an API call

- HMR
_API POLLING for live chat