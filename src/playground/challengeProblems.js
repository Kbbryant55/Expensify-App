// Have the function LetterChanges(str) take the str parameter being passed 
// and modify it using the following algorithm. Replace every letter in the string
//  with the letter following it in the alphabet (ie. c becomes d, z becomes a). 
//  Then capitalize every vowel in this new string (a, e, i, o, u) and 
//  finally return this modified string.



const  vowels = ['a','e','i','o','u'];
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

const LetterChanges = (str) => { 

  let temp = ''; 
   for(let i = 0; i < str.length; i++){
        if(!str.charAt(i).match(/[\s1234567890!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g) > 0) {
            let letterIndex = alphabet.indexOf(str.charAt(i));
            letterIndex++;

            if(letterIndex === 26){
                letterIndex = 0;
            }

            if(vowels.includes(alphabet[letterIndex])){
            temp = temp + alphabet[letterIndex].toUpperCase();
            }
            else {
                temp = temp + alphabet[letterIndex];
            }
        }else{
            temp = temp + str.charAt(i);
        }


    }
  return temp;
 }

 console.log(LetterChanges('hello*!World'));

 //Write a program that, given an array A[] of n numbers and another number x,
 // determines whether or not there exist two elements in S whose sum is exactly x.

 const hasTwoElementsSumOfNum = ( array, num ) => {
    array.sort(((a,b) =>  a-b));

    let result;
    let left = 0;
    let right = array.length-1; 
    while(left < right){
        const sum = array[left] + array[right]; 
        if(sum === num){
            return `${array[left]} + ${array[right]} = ${num}`
        }else if( sum > num){
            right--;
        }
        left++;
    }

    return `There are not 2 elements in the array whose sum equal ${num}`;
 }

 console.log(hasTwoElementsSumOfNum([1, 4, 45, 6, 10, -8], 16));

 //Given a Binary Tree, print post order pre order and inorder DFS


 //BFS under DFS

 class Node {
     constructor(value){
        this.value = value ;
        this.left = null;
        this.right = null;
     }
 }

 class BinaryTree {
     constructor(root) {
         this.root = null;
     }

    postOrder = (node) => {
        if(node == null){
            return
        }
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.value);
     }

     preOrder = (node) => {
        if(node === null){
            return
        }
        console.log(node.value);
        this.preOrder(node.left);
        this.preOrder(node.right);
     }

     inOrder = (node) => {
        if(node === null){
            return
        }
        this.inOrder(node.left);
        console.log(node.value);
        this.inOrder(node.right);
     }

     //This is for BFS

     printLevelOrder = (node) => {
         let queue = [];
         let temp_node = node;

         while (temp_node !== null){
            console.log(temp_node.value);
            queue.push(temp_node.left);
            queue.push(temp_node.right);
            temp_node = queue.shift();
         }
     }

 };


        const tree = new BinaryTree(); 
        tree.root = new Node(1); 
        tree.root.left = new Node(2); 
        tree.root.right = new Node(3); 
        tree.root.left.left = new Node(4); 
        tree.root.left.right = new Node(5); 

        console.log("Preorder traversal of binary tree is "); 
        tree.preOrder(tree.root); 
  
        console.log("\nInorder traversal of binary tree is "); 
        tree.inOrder(tree.root); 
  
        console.log("\nPostorder traversal of binary tree is "); 
        tree.postOrder(tree.root); 

        console.log("\nBreadth First traversal of binary tree is "); 
        tree.printLevelOrder(tree.root); 

        function FirstFactorial(num) { 

            let factorial = num;
            let i = num -1;
        
            console.log(i);
        
            for (; i >= 1 ; i-- ){
              factorial *= i;
              console.log(factorial);
            }
            // code goes here  
            return factorial; 
          
          }
             
          // keep this function call here 
          console.log(FirstFactorial(19));
        

        //   Have the function ScaleBalancing(strArr) read strArr which will contain two elements, the first being the two 
        //positive integer weights on a balance scale (left and right sides) and 
        //the second element being a list of available weights as positive integers. 
        //Your goal is to determine if you can balance the scale by using the least amount of weights from the list, 
        //but using at most only 2 weights. For example: if strArr is ["[5, 9]", "[1, 2, 6, 7]"] then this means 
        //there is a balance scale with a weight of 5 on the left side and 9 on the right side. 
        //It is in fact possible to balance this scale by adding a 6 to the left side from the list of weights and 
        //adding a 2 to the right side. Both scales will now equal 11 and they are perfectly balanced. 
        //Your program should return a comma separated string of the weights that were used from the list in ascending order, 
        //so for this example your program should return the string 2,6

        //   There will only ever be one unique solution and the list of available weights will not be empty. 
        //It is also possible to add two weights to only one side of the scale to balance it. 
        //If it is not possible to balance the scale then your program should return the string not possible.
          const ScaleBalancing = (strArr) => { 
            const scale = strArr[0].replace(/(\[|,|\])+/g, "").split(" ");
            const sortedScaleForDiff = scale.sort(((a,b) =>  b-a));
            const diff = (sortedScaleForDiff[0] - sortedScaleForDiff[1]).toString();
            const weights = strArr[1].replace(/(\[|,|\])+/g, "").split(" ");
          
            const left = parseInt(scale[0]);
            const right = parseInt(scale[1]);
            
            if(scale.length !== 2){
              return 'not possible';
            }
            
            weights.sort(((a,b) =>  a-b));
            
            let tempLeft = left;
            let tempRight = right;
            
            //check if they are already equal to each other
            if(left === right){
              return 'Already equal';
            }
            
            //check if the diff between left and right exists in the Array
            if(weights.includes(diff)){
              return diff;
            }
            
            const isEqual = (left, right, weight1, weight2) => {
                if (left + weight1 + weight2 === right) return true;
                if (left + weight1 === weight2 + right) return true;
                if (left + weight2 === weight1 + right) return true;
                if (left === weight1 + weight2 + right) return true;
                return false;
            }
            
            for (let i = 0; i < weights.length; i++) {
                for (let j = i + 1; j < weights.length; j++) {
                    if (isEqual(left, right, parseInt(weights[i]), parseInt(weights[j]))) {
                        return weights[i].toString() + ',' + weights[j].toString();
                    }
                }
            }
            
            
            //console.log(`Left side: ${left}, Right side: ${right}, weights: ${weights}`);
            
            
            // code goes here  
            return 'Not possible'; 
          
          }