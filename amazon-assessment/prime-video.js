/* Code Question 2
Amazon Prime Video has movies in the category
'comedy' or 'drama'. Determine the earliest time you can finish at least one movie from each category.
The release schedule and durations of the movies are provided.
• You can start watching a movie at the time it is released or later.
• If you begin a movie at time t, it ends at time t + duration.
• If a movie ends at time t + duration, the second movie can start at that time, t + duration, or later.
• The movies can be watched in any order.
Example
comedyReleaseTime = [1, 4]
comedyDuration = [3, 2]
dramaReleaseTime = [5, 2]
dramaDuration = [2, 2]
Duration and release times are aligned by index.
Two of the best ways to finish watching one movie from each category at the earliest time are as follows:
• Start watching comedy movie at time t = 1 and until
t = 1 + 3 = 4. Then, watch the drama movie from
time t=4 to t = 4 + 2 = 6.
• Start watching drama movie at time t = 2 and until t
= 2 + 2 = 4. Then, watch the comedy movie from
time t = 4 to t = 4 + 2 = 6 
*/