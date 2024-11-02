class Solution {
    public boolean isCircularSentence(String sentence) {
        boolean isCircular = sentence.charAt(0) == sentence.charAt(sentence.length() - 1);
        for (int i = 1; i < sentence.length() - 1 && isCircular; i++) {
            if (sentence.charAt(i) == ' ' && sentence.charAt(i - 1) != sentence.charAt(i + 1)) {
                isCircular = false;
            }
        }
        return isCircular;
    }
}