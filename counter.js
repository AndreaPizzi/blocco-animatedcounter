let counter=0;
function runCounter(){
	if(counter == 0){
		const counters = document.querySelectorAll('.counter');
		const speed = 200; // The lower the slower
		
		counters.forEach(counter => {
			const final_txt = counter.getAttribute('data-txtfinale');
			
			const updateCount = () => {
				const target = +counter.getAttribute('data-target');
				
				const count = +counter.innerText;
		
				// Lower inc to slow and higher to slow
				let inc = target / speed;
		
				//console.log('inc: '+inc.toFixed(1));
				//  console.log('count: '+count);
				//  console.log('target: '+target);
		
				// Check if target is reached
				if (count < target) {
					// Add inc to count and output in counter
					let final_text = count + inc;
				//	console.log('target: '+final_text);
					counter.innerHTML = final_text.toFixed(1);
					// Call function every ms
					setTimeout(updateCount, 1);
				} else {
					counter.innerHTML = final_txt;
				}
			};
		
			updateCount();
		});
		counter++;
	}
	
}


$(window).scroll(function (event) {
 if($('.bloccocounter').hasClass('fadeOnScreen_active')){
	runCounter()
 }
});
