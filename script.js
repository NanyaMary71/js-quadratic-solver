         function solve() {
            let a = parseFloat(document.getElementById("a").value);
            let b = parseFloat(document.getElementById("b").value);
            let c = parseFloat(document.getElementById("c").value);

            if (a === 0) {
                document.getElementById("result").innerHTML = "Error: 'a' cannot be zero.";
                return;
            }

            let discriminant = (b * b) - (4 * a * c);

            if (discriminant < 0) {
                document.getElementById("result").innerHTML = "No real solutions. Discriminant is negative.";
                return;
            }

            let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

            document.getElementById("result").innerHTML = `
                <strong>Results:</strong><br>
                x₁ = ${x1}<br>
                x₂ = ${x2}
            `;
        }
    

