PROGRAM STATES:

FOR EVERYONE:
"loggedOut" -> the user is logged out of CSE servers

FOR STUDENT:
"selectClassStudent" -> select the specific class that the user wants to run tests on.
"selectAssignmentStudent" -> select the specific assignment that the user wants to run tests on.
"runGrader" -> upload all files / new files to the web grader through a file upload system.
"graderResultsFull" -> show all test cases after running grader
"graderResultsFailing" -> show only failing test cases after running grader
"graderResultsHistory" -> show information about previous web grader attempts on a specific account

(a far fetched idea might be to add a file history page as well, but i dont want to focus too much on that for now)

FOR PROFESSOR:
"selectClassProfessor" -> select the specific class the professor wants to change, or add a new class.
"createNewClass" -> create a new class
"selectAssignmentProfessor" -> select the specific assignment that should be edited, or create a new assignment. Also, edit the class this particular assignment is in (including how many people are in the class)
"classSettings" -> show settings about a class
"createNewAssignment" -> create a new assignment
"assignmentSettings" -> show settings about an assignment
"addTest" -> create a new test
"testSettings" -> show settings about a test
"runGraderTest" -> run the grader as the professor to make sure it works
"studentResultsHistory" -> show the history of the user's past web grader attempts.
"studentUploads" -> show the files and the source code of
"runTestsOnStudents" -> Run all tests on the students and give each student a grade
