 let count = 0;

function counter() {
  count++;
  return count;
}
function resetCounter() {
  let previousCount = count;
  count = 0;
  return `${previousCount} and the counter reset now`;
}

document.write(counter() + "<br>");       
document.write(counter() + "<br>");       
document.write(counter() + "<br>");       
document.write(resetCounter() + "<br>");  
document.write(counter() + "<br>");    
document.write(counter() + "<br>");    
document.write(resetCounter() + "<br>");       
document.write(counter() + "<br>");       
document.write(counter() + "<br>");       
document.write(counter() + "<br>");       