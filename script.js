
        function addCourseInputs() {
            var numCourses = document.getElementById("numCourses").value;
            var courseInputsDiv = document.getElementById("courseInputs");
            courseInputsDiv.innerHTML = ""; // Clear previous inputs
            
            for (var i = 0; i < numCourses; i++) {
                var label = document.createElement("label");
                label.textContent = "Grade for Course " + (i + 1) + ": ";
                var gradeInput = document.createElement("input");
                gradeInput.type = "text";
                gradeInput.name = "grade" + i;
                gradeInput.required = true;
                label.appendChild(gradeInput);
                courseInputsDiv.appendChild(label);

                var creditLabel = document.createElement("label");
                creditLabel.textContent = " Credit Hours for Course " + (i + 1) + ": ";
                var creditInput = document.createElement("input");
                creditInput.type = "number";
                creditInput.name = "credit" + i;
                creditInput.required = true;
                creditLabel.appendChild(creditInput);
                courseInputsDiv.appendChild(creditLabel);

                courseInputsDiv.appendChild(document.createElement("br"));
            }
        }

        function calculateCGPA() {
            var numCourses = document.getElementById("numCourses").value;
            var totalCreditPoints = 0;
            var totalCredits = 0;

            for (var i = 0; i < numCourses; i++) {
                var grade = document.getElementsByName("grade" + i)[0].value.toUpperCase();
                var creditHour = parseInt(document.getElementsByName("credit" + i)[0].value);

                // Convert grade to grade points
                var gradePoints;
                switch (grade) {
                    case "S":
                        gradePoints = 10;
                        break;
                    case "A":
                        gradePoints = 9;
                        break;
                    case "B":
                        gradePoints = 8;
                        break;
                    case "C":
                        gradePoints = 7;
                        break;
                    case "D":
                        gradePoints = 6;
                        break;
                    case "E":
                        gradePoints = 5;
                        break;
                    case "F":
                        gradePoints = 0;
                        break;
                        default:
                        alert("Invalid grade entered for course " + (i + 1));
                        return;
                }

                // Calculate total credit points
                totalCreditPoints += gradePoints * creditHour;
                totalCredits += creditHour;
            }

            // Calculate CGPA
            var cgpa = totalCreditPoints / totalCredits;

            // Display CGPA
            var cgpaResultDiv = document.getElementById("cgpaResult");
            cgpaResultDiv.textContent = "CGPA: " + cgpa.toFixed(2);
        }

        document.getElementById("cgpaForm").addEventListener("submit", function(event) {
            event.preventDefault();
            calculateCGPA();
        });

        document.getElementById("numCourses").addEventListener("input", function() {
            addCourseInputs();
        });

        // Call addCourseInputs initially
        addCourseInputs();