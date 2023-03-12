const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {
    return cats.push(name)}
    function destructivelyPrependCat(name){
        return cats.unshift(name)}
        function destructivelyRemoveLastCat(name){
            return cats.pop(name)}
            function destructivelyRemoveFirstCat(name){
                return cats.shift(name)}
             function appendCat(name){
                return [...cats, "Broom"]}
                function prependCat(name){
                    return ["Arnold", ...cats]}
                 function removeFirstCat(){
                    return cats.slice(0, length - 1)}
                    function removeFirstCat(){
                        return cats.slice(1)}
                   function removeLastCat(name){
                    const newcats =cats.slice(0, cats.length-1)
                    return newcats}
                    






               
                    

                