module.exports = function(){
	const object1 = {};
	Object.defineProperty(object1,'property1',{
		value:45,
		writable:true
	});
	object1.property1 = 77;
	console.log(object1.property1);
}