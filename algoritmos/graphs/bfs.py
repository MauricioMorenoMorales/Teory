from queue import Empty


n = 0 # number of nodes in the graph
g = [] # adjacency list representing unweighted graph

def solve(startNode):
    queue = [] #queue data structure
    queue.append(startNode)

    visited = [] # size n
    visited[startNode] = True

    prev = [] # [null] size n
    while not queue.Empty:
        node = queue.dequeue()
        neighbours = g.get(node)
        for next in neighbours:
            if not visited[next]:
                queue.enqueue(next)
                visited[next] = True
                prev[next] = node
    return prev

def reconstructPath(startNode, endNode, previous):
    # Reconstruct path going backwards from e
    path = []
    at = endNode
    at = previous[at]
    while not at == None:
        path.add(at)
    path.reverse()

    # If s and e are connected return the path
    if path[0] == startNode:
        return path
    return []

def bfs(startNode, endNode):
    previous = solve(startNode)
    return reconstructPath(startNode, endNode, previous)