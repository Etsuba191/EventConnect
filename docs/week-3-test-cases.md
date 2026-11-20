# Week 3 Manual Test Cases

Run these checks against the local development server. Actual results should be updated after each local browser run.

| Test ID | Scenario | Steps | Expected result | Actual result | Status |
| --- | --- | --- | --- | --- | --- |
| W3-01 | Events listing | Open `/events`. | Event cards are visible. | Six event cards displayed. | Pass |
| W3-02 | Existing-event search | Search for `web development`. | Matching event remains visible. | One matching event displayed. | Pass |
| W3-03 | Empty search | Search for `does-not-exist`. | Empty state appears with a clear-filters action. | Pending execution | Not run |
| W3-04 | Category filter | Select `Technology`. | Only technology events appear. | Technology events displayed. | Pass |
| W3-05 | Clear filters | Apply a search and category, then select `Clear all filters`. | All events return and controls reset. | Pending execution | Not run |
| W3-06 | Details navigation | Select an event card's details link. | Correct event details and registration form appear. | Web Development Workshop details and form displayed. | Pass |
| W3-07 | Invalid event | Open `/events/not-a-real-event`. | A helpful not-found state appears. | Not-found message and return link displayed. | Pass |
| W3-08 | Empty registration | Submit the form without values. | Required field errors appear and no success message is shown. | Name and email errors displayed. | Pass |
| W3-09 | Invalid email | Enter a name and invalid email, then submit. | Email validation error appears. | Invalid email error displayed. | Pass |
| W3-10 | Successful demo registration | Enter a name and valid email, then submit. | Demo confirmation appears and a second submission is prevented. | Confirmation displayed and form replaced. | Pass |
| W3-11 | Keyboard operation | Use Tab, Enter, and keyboard input through search, filters, and registration. | Controls are reachable, visible focus is maintained, and actions work. | Pending execution | Not run |
| W3-12 | Responsive layout | Check 360px, 768px, and 1440px widths. | No horizontal overflow and content remains usable. | Pending execution | Not run |

No test results are marked as passed until they are executed in a browser.
