url = "https://v2.jokeapi.dev/joke/Any?type=single&amount=10";

jokes = fetch(url);

jokes
    .then((result)=> result.json())
    .then((res)=> {
        res.jokes.forEach(element => {
            joke = document.createElement("div");
            joke.classList.add("joke");

            element_keys = Object.keys(element)
            element_keys.splice(element_keys.indexOf("joke"), 1);
            element_keys.unshift("joke");


            if(element.flags.explicit)
                return false;

            element_keys.forEach(inner_element=>{  
                if(["joke", "category", "lang", "flags"].indexOf(inner_element.toLowerCase())<0)
                    return false; 

                section = document.createElement("div");
                section.classList.add("section");

                span1 = document.createElement("span");
                span1.innerText = inner_element+":";
                
                span2 = document.createElement("span");
                if(inner_element.toLowerCase() != "flags")
                span2.innerText = element[inner_element];
                else{ 
                    span2.innerText = "";
                    span2_array = [];
                    Object.keys(element[inner_element]).forEach(elem=>{
                        if(element[inner_element][elem])
                           span2_array.push(elem)
                    });

                    if(span2_array.length<1)
                        span2.innerText = "none";
                    else
                        span2.innerText = span2_array.join(", ");
                }

                section.appendChild(span1)
                section.appendChild(span2)
                joke.appendChild(section);
            });

            document.getElementById("jokes").appendChild(joke);
            document.getElementById("jokes").style.opacity = 1;
            
            // testPromise = new Promise((resolve, reject)=>{
            //     document.getElementsByClassName("loader")[0].style.opacity = 0;
            //     resolve(document.getElementsByClassName("loader")[0].style.display = "none");
            // });

            // testPromise.then((result)=>{});
            
            document.getElementsByClassName("loader")[0].style.opacity = 0;
            document.getElementsByClassName("loader")[0].style.display = "none";
        });
    })
    .catch((e)=>console.log(e))


// https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://css-loaders.com/&ved=2ahUKEwjWmbXb-4CGAxXBZ0EAHVhCAcMQFnoECBQQAQ&usg=AOvVaw1934bZ68BqaaL12GO37nw_
