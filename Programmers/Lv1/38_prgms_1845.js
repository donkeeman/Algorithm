function solution(nums) {
    const types = new Set(nums);
    return Math.min(types.size, nums.length / 2);
}