from array import array


def merge(left, right):
	result = []
	left_index, right_index = 0, 0
	while left_index < len(left) and right_index < len(right):
		# change the direction of this comparison to change the direction of the sort
		if left[left_index] <= right[right_index]:
			result.append(left[left_index])
			left_index += 1
		else:
			result.append(right[right_index])
			right_index += 1
	# Add any remaining elements in the left or right lists.
	if left_index < len(left): result.extend(left[left_index:])
	if right_index < len(right): result.extend(right[right_index:])
	return result

def merge_sort(m):
	if len(m) <= 1: return m
	middle = len(m) // 2

	left = m[:middle]
	right = m[middle:]

	return list(merge(merge_sort(left), merge_sort(right)))

print(merge_sort([5,2,7, 3, 5 ,3]))