# Node1.data = "F"
# Node1.next = Node2
# Node2.data = "I"
# Node2.next = Node3
# Node3.data = "S"
# Node3.next = Node4
# Node4.data = "H"
# Node4.next = None

def traverse(node):
    if node.next != None:
        traverse(node.next)
    print(node.data)

#? What is the output of traverse(node1)
#? it will be HISF

# traverse(Node1)
#     -> traverse(Node2)
#         -> traverse(Node3)
#             -> traverse(Node4)
#                 -> print "H"
#             -> print "S"
#         -> print "I"
#     -> print "F"