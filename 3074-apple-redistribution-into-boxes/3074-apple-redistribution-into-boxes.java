class Solution {
    public int minimumBoxes(int[] apple, int[] capacity) {
        // 1. Calculate total number of apples
        int totalApples = 0;
        for (int a : apple) {
            totalApples += a;
        }

        // 2. Sort capacities in ascending order
        Arrays.sort(capacity);

        int currentCapacity = 0;
        int boxes = 0;

        // 3. Pick boxes starting from the largest capacity
        for (int i = capacity.length - 1; i >= 0; i--) {
            currentCapacity += capacity[i];
            boxes++;

            // 4. Stop once total capacity is enough
            if (currentCapacity >= totalApples) {
                return boxes;
            }
        }

        return boxes;
    }
}