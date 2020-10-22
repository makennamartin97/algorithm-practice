# search for element in circular sorted array using binary search

def binarysearch(arr, target):
    left = 0
    right = len(arr)-1
    while left <= right:
        mid = (left + right)//2
        if target == arr[mid]:
            return mid

        if arr[mid] <= arr[right]:
            if arr[mid] < target <= arr[right]:
                left = mid + 1
            else:
                right = mid-1
        else:
            if arr[left] <= target < arr[mid]:
                right = mid-1
            else:
                left = mid + 1
    return -1


