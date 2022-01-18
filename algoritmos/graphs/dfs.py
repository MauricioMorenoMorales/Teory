n = 0 #number of nodes in the graph
graph = [] # adjacency list representing the graph
visited = [] #[false,true,true,false] size of n

def dfs(at):
    if visited[at]: return
    visited[at] = True

    neighbours = graph[at]
    for next in neighbours:
        dfs(next)

start_node = 0
dfs(start_node)