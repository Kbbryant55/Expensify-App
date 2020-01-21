import java.io.*;
import java.util.*;
import org.junit.*;
import org.junit.runner.*;

/*
 * Instructions:
 *
 * 1) Please use this CoderPad editor to code your solution. Code written
 *    outside CoderPad’s editor and copy/pasted into CoderPad will not be
 *    accepted.
 * 2) Use the programming language you’re most comfortable with. Note: The
 *    team is primarily writing Java/Go/Python.
 * 3) Please write "production quality" code. Imagine that after you have
 *    written this code it will be submitted to one of your peers for code
 *    review. Your code should compile/execute without warnings/errors.
 *
 * Acceptance Criteria:
 * 
 * 1) Write a function that accepts an array/list of strings, counts the
 *    occurrence of each string, and then returns a data structure with
 *    each unique string and the number of times it occurred. For example,
 *    given an input that contains:
 *
 *        ["apple", "bat", "apple", "car"]
 *
 *    the function should return a data structure that has a count of 2 for
 *    "apple", 1 for "bat", and 1 for "car".
 *
 *    Notes:
 *
 *      a) Your solution should ignore differences in upper/lowercase:
 *         "Apple" should be treated as "apple"
 *      b) Your solution should trim/strip/remove all
 *         leading/trailing/inner whitespace: " app le " should be treated
 *         as "apple"
 *      c) Your solution should trim/strip/remove any non-alphanumeric
 *         characters (a-z, A-Z, 0-9): "apple!" should be treated as
 *         "apple"
 * 
 * 2) Write the unit test coverage for your solution. Cover the 
 *    permutations that ensure positive/negative functionality is correct.
 *    As well, cover meaningful edge cases to ensure both correct
 *    functionality and to ensure no errors with code execution.
 * 3) At the top of your function/solution, document as a comment the big O
 *    run time of your solution.
 */


/* Big O should be O(n) because the HashMap is instant access on lookup.
*  That means we only need to worry about the n-elements in the list 
*  and the n-keys in the map.
*/

public class Solution {
  public Solution(){
    
  }
  public static void main(String[] args) {
    JUnitCore.main("Solution");
  }
    
  public Map<String,Integer> duplicateStrings(String[] wordList){
    
    Map<String,Integer> map = new HashMap<String,Integer>();
    
    for(String word : wordList){
      word = word.replaceAll("[^a-zA-Z+]","").toLowerCase().trim();
      
      if(!word.isBlank()){
        if(map.containsKey(word)){
          map.put(word, Integer.valueOf((map.get(word) +1))); 
        }
        else{
          map.put(word,1);
        }
      } 
    }
    
    return map;
    
    
  }
  
  public void printDuplicateStringsFromMap(Map<String,Integer> map){
    map.forEach((key,value) -> System.out.println(" " + key + " :  " + value));
  }
  
  @Test
  public void testSpecialCharacters(){
    String [] list = {"apple", "$apple!", "apple~"};
    
    Map<String,Integer> map = duplicateStrings(list);
    printDuplicateStringsFromMap(map);
    Assert.assertTrue(map.get("apple") == 3);
  }
  
  @Test
  public void testWhiteSpaces(){
    String [] list = {" apple", "apple  ", "app  le"};
    
    Map<String,Integer> map = duplicateStrings(list);
    printDuplicateStringsFromMap(map);
    Assert.assertTrue(map.get("apple") == 3);
  }
  
  @Test
  public void testCaseSentitive(){
    String [] list = {"APPLE", "apple", "ApPlE"};
    
    Map<String,Integer> map = duplicateStrings(list);
    printDuplicateStringsFromMap(map);
    Assert.assertTrue(map.get("apple") == 3);
  }
  
  @Test
  public void testStringsWithNumbers(){
    String [] list = {"AP123PLE", "1apple", "App1le", "123344"};
    
    Map<String,Integer> map = duplicateStrings(list);
    printDuplicateStringsFromMap(map);
    Assert.assertTrue(map.get("apple") == 3);
  }
  
  @Test
  public void testEmptyStrings(){
    String [] list = {" ", "", " ", "     ", ""};
    
    Map<String,Integer> map = duplicateStrings(list);
    printDuplicateStringsFromMap(map);
    Assert.assertTrue(map.isEmpty());
  }
  
  @Test
  public void happyPath(){
    String list[] = {"apple", "bat", "apple", "car"};
    Map<String,Integer> map = duplicateStrings(list);
    printDuplicateStringsFromMap(map);
    
    Assert.assertTrue(map.get("apple") == 2);
    Assert.assertTrue(map.get("bat") == 1);
    Assert.assertTrue(map.get("car") == 1);
    
  }

  
  // Write your solution here...
}