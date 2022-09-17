class Stack:
    def __init__(self):
        self._data = []

    def __repr__(self):
        return str(self._data)

    def __str__(self):
        str_stack = "PILHA:\n"
        for index in range(self.size()-1,-1,-1):
            value = self._data[index]
            str_stack += " |" + str(value) + "|\n"
        return str_stack


    def __len__(self):
        return len(self._data)

    def size(self):
        return len(self._data)

    def is_empty(self):
        return not self.size()

    def push(self, value):
        self._data.append(value)

    def pop(self):
        if self.is_empty():
            return None
        return self._data.pop()

    def peek(self):
        if self.is_empty():
            return None
        return self._data[-1]