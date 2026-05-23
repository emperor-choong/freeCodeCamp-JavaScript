function avalancheRisk(snowDepth, slope) {
    if(snowDepth === "Shallow"){
        if(slope === "Gentle"){
            return "Safe";
        }else if(slope === "Steep"){
            return "Safe";
        }else if(slope === "Very Steep"){
            return "Safe";
        }
    }else if(snowDepth === "Moderate"){
        if(slope === "Gentle"){
            return "Safe";
        }else if(slope === "Steep"){
            return "Risky";
        }else if(slope === "Very Steep"){
            return "Risky";
        }
    }else if(snowDepth === "Deep"){
        if(slope === "Gentle"){
            return "Safe";
        }else if(slope === "Steep"){
            return "Risky";
        }else if(slope === "Very Steep"){
            return "Risky";
        }
    }
}

// console.log(avalancheRisk("Shallow", "Gentle"));
// console.log(avalancheRisk("Shallow", "Steep"));
// console.log(avalancheRisk("Shallow", "Very Steep"));
// console.log(avalancheRisk("Moderate", "Gentle"));
// console.log(avalancheRisk("Moderate", "Steep"));
// console.log(avalancheRisk("Moderate", "Very Steep"));
// console.log(avalancheRisk("Deep", "Gentle"));
// console.log(avalancheRisk("Deep", "Steep"));
// console.log(avalancheRisk("Deep", "Very Steep"));