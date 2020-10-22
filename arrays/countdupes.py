# count occurances of a num in sorted arr

def countdupes(arr, num):
    left, right = 0, len(arr)-1
    mid = left + right // 2
    count = 0
    if num <= arr[mid]:
        right = arr[mid]
    if num > arr[mid]:
        left = arr[mid]+1
    while left <= right:
        if arr[left] == num:
            count+=1
        left+=1
    return count

arr = [1,1,1,2,3,4,4,5,7,10,10,10,13,13,14,16,18,18]
num = 10
print(countdupes(arr, num))
