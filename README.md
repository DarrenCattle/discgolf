Concept
---
A round is a single game of disc golf played through a course.  
A partial round can be stored with 0's indicating the remaining holes were unplayed.  

Database Structure (HashMap)
---
Account Identifier, Array of Rounds  

Round Structure (Object Schema)
---
Player Name (can be single or array)  
Course Name  
Score Sheet (array, can be array of arrays)  
Date Played  
*Time Started  
*Time Finished  

Course Structure (Object Schema)
---
Course Name  
Course Score (single array)  
*Hole Length (single array)  
*Location (lat,long)  
*Course Map (external link)  

*not required, optional variable