function intersect(nums1, nums2) {
    // create new array
    let res = []
    //iterate thru the first and see if the second contains the value
    for(var i = 0; i <= nums1.length; i++){
        //if it does, push the val into the new arr
        if(nums2.includes(nums1[i])){
            res.push(nums1[i])
            // iterate thru the second arr and change the val so it cant repeat
            for(var j = 0; j <= nums2.length; j++){
                if(nums2[j] == nums1[i]){
                    nums2[j] = "X"
                    break
                }
            }
        }
    }
    return res
    
};
//testing
console.log(intersect([5,7,2,4,9,8,9], [9,7,2,4,9,8,3])) // [ 7, 2, 4, 9, 8, 9 ]