const input = document.getElementById("campo") as HTMLInputElement;
input.addEventListener('campo', (Event) =>{
    const i = Event.currentTarget as HTMLInputElement;
    console.log(i.value);    
});