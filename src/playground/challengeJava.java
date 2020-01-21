import java.util.*; 
import java.io.*;

class Main {

  public static String LongestWord(String sen) {
    // code goes here  
    String alphaOnly = sen.replaceAll("[^a-zA-Z ]+","");
  
    String [] words = alphaOnly.split(" ");
    
    int charCount = 0;
    String longestWord = "";
    
    for(String word: words){
      if(word.length() > charCount){
        charCount = word.length();
        longestWord = word;
      }
    }
    
    return longestWord;
  }

  public static void main (String[] args) {  
    // keep this function call here     
    Scanner s = new Scanner(System.in);
    System.out.print(LongestWord(s.nextLine())); 
  }

}

class Main {

  public static String AlphabetSoup(String str) {
    // code goes here  
    
    String alphaOnly = str.replaceAll("[^a-zA-Z]+","").toLowerCase();
    char [] charArr = str.toCharArray();
    Arrays.sort(charArr);
    String inOrder = new String(charArr);
    
    return inOrder;
  }

  public static void main (String[] args) {  
    // keep this function call here     
    Scanner s = new Scanner(System.in);
    System.out.print(AlphabetSoup(s.nextLine())); 
  }

}



class QuickSort 
{ 
    /* This function takes last element as pivot, 
       places the pivot element at its correct 
       position in sorted array, and places all 
       smaller (smaller than pivot) to left of 
       pivot and all greater elements to right 
       of pivot */
    int partition(int arr[], int low, int high) 
    { 
        int pivot = arr[high];  
        int i = (low-1); // index of smaller element 
        for (int j=low; j<high; j++) 
        { 
            // If current element is smaller than the pivot 
            if (arr[j] < pivot) 
            { 
                i++; 
  
                // swap arr[i] and arr[j] 
                int temp = arr[i]; 
                arr[i] = arr[j]; 
                arr[j] = temp; 
            } 
        } 
  
        // swap arr[i+1] and arr[high] (or pivot) 
        int temp = arr[i+1]; 
        arr[i+1] = arr[high]; 
        arr[high] = temp; 
  
        return i+1; 
    } 
  
  
    /* The main function that implements QuickSort() 
      arr[] --> Array to be sorted, 
      low  --> Starting index, 
      high  --> Ending index */
    void sort(int arr[], int low, int high) 
    { 
        if (low < high) 
        { 
            /* pi is partitioning index, arr[pi] is  
              now at right place */
            int pi = partition(arr, low, high); 
  
            // Recursively sort elements before 
            // partition and after partition 
            sort(arr, low, pi-1); 
            sort(arr, pi+1, high); 
        } 
    } 
  
    /* A utility function to print array of size n */
    static void printArray(int arr[]) 
    { 
        int n = arr.length; 
        for (int i=0; i<n; ++i) 
            System.out.print(arr[i]+" "); 
        System.out.println(); 
    } 

}


class InsertionSort { 
    /*Function to sort array using insertion sort*/
    void sort(int arr[]) 
    { 
        int n = arr.length; 
        for (int i = 1; i < n; ++i) { 
            int key = arr[i]; 
            int j = i - 1; 
  
            /* Move elements of arr[0..i-1], that are 
               greater than key, to one position ahead 
               of their current position */
            while (j >= 0 && arr[j] > key) { 
                arr[j + 1] = arr[j]; 
                j = j - 1; 
            } 
            arr[j + 1] = key; 
        } 
    } 
  
    /* A utility function to print array of size n*/
    static void printArray(int arr[]) 
    { 
        int n = arr.length; 
        for (int i = 0; i < n; ++i) 
            System.out.print(arr[i] + " "); 
  
        System.out.println(); 
    } 
  
    // Driver method 
    public static void main(String args[]) 
    { 
        int arr[] = { 12, 11, 13, 5, 6 }; 
  
        InsertionSort ob = new InsertionSort(); 
        ob.sort(arr); 
  
        printArray(arr); 
    } 
}


public class StringPermutations {
    public static void main(String args[]) { 
         permutation("123");
    }
/* * A method exposed to client to calculate permutation of String in Java. */ 
    public static void permutation(String input){
                permutation("", input); 
    } 
/* * Recursive method which actually prints all permutations * of given String, 
but since we are passing an empty String * as current permutation to start with, 
* I have made this method private and didn't exposed it to client. */
    private static void permutation(String perm, String word) { 
     if (word.isEmpty()) {
          System.err.println(perm + word); 
          } 
     else { 
        for (int i = 0; i < word.length(); i++) {
            permutation(perm + word.charAt(i), word.substring(0, i)
                             + word.substring(i + 1, word.length())); 
            } 
        }
    } 
}



public static String inPlaceReverse(final String input) { 
    final StringBuilder builder = new StringBuilder(input); 
    int length = builder.length(); 
    for (int i = 0; i < length / 2; i++) {
         final char current = builder.charAt(i); 
         final int otherEnd = length - i - 1; 
         builder.setCharAt(i, builder.charAt(otherEnd));
          // swap 
         builder.setCharAt(otherEnd, current); 
        } 
    return builder.toString(); 
 }

class Main {  
    public static int ClosestEnemyII(String[] strArr) {
        Coordinate ally = new Coordinate(-1, -1);
        List<Coordinate> enemies = new ArrayList<>();

        // Establish the initial coordinate locations of the ally and the enemies
        for (int i = 0; i < strArr.length; i++) {
            for (int j = 0; j < strArr.length; j++) {
                if (strArr[j].charAt(i) == '1') {
                    ally = new Coordinate(i, j);
                } else if (strArr[j].charAt(i) == '2') {
                    enemies.add(new Coordinate(i, j));
                }
            }
        }

        // Incrementally shift the matrix right and down by one to properly calculate distances due to
        // up/down and left/right wrapping
        int closestEnemy = Integer.MAX_VALUE;
        int endIndex = strArr.length - 1;
        for (int i = 0; i < endIndex + 1; i++) {
            System.out.println();
            Coordinate newAlly = new Coordinate(
                    (ally.x + i > endIndex ? (ally.x + i - 1) % endIndex : ally.x + i),
                    (ally.y + i > endIndex ? (ally.y + i - 1) % endIndex : ally.y + i));
            for (Coordinate enemy : enemies) {
                Coordinate newEnemy = new Coordinate(
                        (enemy.x + i > endIndex ? (enemy.x + i - 1) % endIndex : enemy.x + i),
                        (enemy.y + i > endIndex ? (enemy.y + i - 1) % endIndex : enemy.y + i));
                int distance = newAlly.distance(newEnemy);
                if (distance < closestEnemy) {
                    closestEnemy = distance;
                }
            }
        }
        return (closestEnemy == Integer.MAX_VALUE ? 0 : closestEnemy);
    }

    // Helper class to hold the x,y coordinates of the ally and enemies
    private static class Coordinate {
        int x;
        int y;

        Coordinate(int x, int y) {
            this.x = x;
            this.y = y;
        }

        int distance(Coordinate c) {
            return Math.abs(this.x - c.x) + Math.abs(this.y - c.y);
        }
    }
  
  public static void main (String[] args) {  
    // keep this function call here     
    Scanner s = new Scanner(System.in);
    System.out.print(ClosestEnemyII(s.nextLine())); 
  }   
  
}


//reverse a linked list in place
class LinkedList { 
  
    static Node head; 
  
    static class Node { 
  
        int data; 
        Node next; 
  
        Node(int d) 
        { 
            data = d; 
            next = null; 
        } 
    } 
  
    /* Function to reverse the linked list */
    Node reverse(Node node) 
    { 
        Node prev = null; 
        Node current = node; 
        Node next = null; 
        while (current != null) { 
            next = current.next; 
            current.next = prev; 
            prev = current; 
            current = next; 
        } 
        node = prev; 
        return node; 
    } 
  
    // prints content of double linked list 
    void printList(Node node) 
    { 
        while (node != null) { 
            System.out.print(node.data + " "); 
            node = node.next; 
        } 
    } 
  
    public static void main(String[] args) 
    { 
        LinkedList list = new LinkedList(); 
        list.head = new Node(85); 
        list.head.next = new Node(15); 
        list.head.next.next = new Node(4); 
        list.head.next.next.next = new Node(20); 
  
        System.out.println("Given Linked list"); 
        list.printList(head); 
        head = list.reverse(head); 
        System.out.println(""); 
        System.out.println("Reversed linked list "); 
        list.printList(head); 
    } 
} 


//reverse a String in place

public static String reverse(String str) {
        if(str == null || str.isEmpty()){
            return str;
        }
        char[] characters = str.toCharArray();
        int i = 0;
        int j = characters.length - 1;
        while (i < j) {
            swap(characters, i, j);
            i++;
            j--;
        }
        return new String(characters);
    }

    private static void swap(char[] str, int i, int j) {
        char temp = str[i];
        str[i] = str[j];
        str[j] = temp;
    }


public static void printDuplicateCharacters(String word) {
        char[] characters = word.toCharArray();

        // build HashMap with character and number of times they appear in String
        Map<Character, Integer> charMap = new HashMap<Character, Integer>();
        for (Character ch : characters) {
            if (charMap.containsKey(ch)) {
                charMap.put(ch, charMap.get(ch) + 1);
            } else {
                charMap.put(ch, 1);
            }
        }

        // Iterate through HashMap to print all duplicate characters of String
        Set<Map.Entry<Character, Integer>> entrySet = charMap.entrySet();
        System.out.printf("List of duplicate characters in String '%s' %n", word);
        for (Map.Entry<Character, Integer> entry : entrySet) {
            if (entry.getValue() > 1) {
                System.out.printf("%s : %d %n", entry.getKey(), entry.getValue());
            }
        }
    }

    int binarySearch(int arr[], int l, int r, int x) 
    { 
        if (r >= l) { 
            int mid = l + (r - l) / 2; 
  
            // If the element is present at the 
            // middle itself 
            if (arr[mid] == x) 
                return mid; 
  
            // If element is smaller than mid, then 
            // it can only be present in left subarray 
            if (arr[mid] > x) 
                return binarySearch(arr, l, mid - 1, x); 
  
            // Else the element can only be present 
            // in right subarray 
            return binarySearch(arr, mid + 1, r, x); 
        } 
  
        // We reach here when element is not present 
        // in array 
        return -1; 
    } 