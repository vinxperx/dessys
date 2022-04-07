#!/usr/bin/env python

import re

string = 'O cravo e a resa'
str1 = 'e'
str2 = 'E'
print(re.sub(r'\b{}\b'.format(str1),'E',string))
