"""
---
title: Python Function Template
author: Brendan Casey
created: 2024-12-13
notes: 
  Template for creating properly formatted and documented Python
  functions.
---
"""


"""
[Title of the Function]

[Brief description of what the function does]

Parameters
----------
param1 : type
    [Description of param1]
param2 : type
    [Description of param2]
param3 : type, optional
    [Description of param3. Default is `default_value`]
param4 : type
    [Description of param4]

Returns
-------
type
    [Description of the return value or object]

Examples
--------
# Example usage of the function
example_data = [example data]
result = function_name(param1, param2, param3, param4)
print(result)
"""

def function_name(param1, param2, param3="default_value", param4=None):
    """
    [Detailed description of the function, if needed]
    """
    # Step 1: [Description of what this step does]
    step1_result = [code for step 1]
    
    # Step 2: [Description of what this step does]
    step2_result = [code for step 2]
    
    # Step 3: [Description of what this step does]
    step3_result = [code for step 3]
    
    # Step 4: [Description of what this step does]
    step4_result = [code for step 4]
    
    # Step 5: [Description of what this step does]
    final_result = [code for step 5]
    
    return final_result

# Example usage of the function
if __name__ == "__main__":
    param1 = [value]
    param2 = [value]
    param3 = [value]  # Optional parameter
    param4 = [value]
    result = function_name(param1, param2, param3, param4)
    print("Result:", result)
