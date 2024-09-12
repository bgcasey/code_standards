# Code standards and templates

![In Development](https://img.shields.io/badge/Status-In%20Development-yellow)


This repository describes best practices for writing reproducible code and structuring project directories. It provides templates for writing and formatting R code and emphasizes maintaining clear documentation and organization throughout a research project. 

Templates include:
- [r_module.R](https://github.com/bgcasey/code_standards/blob/main/templates/r_module.R): A template for writing individual R modules.
- [r_function.R](https://github.com/bgcasey/code_standards/blob/main/templates/r_function.R): A template for writing well documented and formatted R functions. 

The goal of this repository is to share standards that can improve collaboration, streamline in-house code reviews, and make it easier to revisit past work. 

**Why use these standards?**
1. **Sharing work with colleagues**:
    - By following standardized templates and code conventions, collaborators can easily understand, run, and build on your work. Proper documentation and a clear project structure makes it easier for others to contribute and troubleshoot issues.
2. **In-house review of your work**:
    - A reproducible and well-organized codebase enables smooth internal reviews. Team members or supervisors can quickly understand your methods and results by reviewing the code itself.
3. **Sharing work with your future self**:
    - Revisiting old projects is easier when everything is clearly labeled, well-documented, and logically structured. Doing so minimizes the learning curve when you return to a project.

While the examples provided focus on R, the basic principles can be applied to other coding languages. Clear documentation, organized file structures, and consistent coding styles enhances reproducibility and collaboration across different programming environments.

---

## Table of Contents
- [1. Code Styling](#code-styling)
- [2. Documenting Code](#documenting-code)
- [3. Documenting Functions](#documenting-functions)
- [4. Project Directory Structure](#project-directory-structure)

---
## 1. Code Styling

Style R code according to the conventions outlined in the [tidyverse style guide](https://style.tidyverse.org/index.html).  Google's [R style guide](https://google.github.io/styleguide/Rguide.html) is based in this. While it is recommended that you familiarize yourself with the  [tidyverse style guide](https://style.tidyverse.org/index.html), here are some highlights:

### Filenames

Give your files meaningful names and avoid special characters. Use a consistent file naming convention. Naming conventions include:

- **snake_case**:
    - Words are separated by underscores (`_`).
    - All letters are typically lowercase.
    - Example: `1_your_code_name.R`.
- **kebab-case**:
    - Words are separated by hyphens (`-`).
    - All letters are usually lowercase.
    - Example: `1-your-code-name.R`.
- **camelCase**:
    - The first word is lowercase, and each subsequent word starts with a capital letter.
    - No spaces or special characters between words.
    - Example: `1YourCodeName.R`.

Prefix files with numbers to show the order in which files should be run:

```
00_process_response_data.R
01_process_predictor_data.R
...
09_generalized_linear_mixed_models.R
10_visualize_results.R
```

### Object names

Similar to file names, object names within code should be concise, descriptive, and follow and consistent naming convention.

```R
bird_data <- read.csv("bird_species_data.csv")
pred_data <- read.csv("predictor_variables.csv")
```



### Code Syntax

- Put spaces after commas
- Place a space after `()` 
- `{{ }}` should have inner spaces
- Operators (`==, +, -, `<-`, etc.) should always be surrounded by spaces.
- Surround operators (`==, +, -, `<-`, etc.) with spaces.
- For curly brackets `{}`, end lines with `{` and start lines with `}`
- Limit the line width of your code to 80 characters. This will enhance readability and ensure that the code can be printed or displayed without cropping. 
- Use `<-` to assign object names.
- Comment your code to explain what your code is doing, it's inputs, outputs, and and your rational. Comments should begin with a `#` followed by a space. See the [R module template](https://github.com/bgcasey/code_standards/blob/main/templates/r_module.R) in this repository for an example of how to comment code. 

### Auto-styling

R code can be reformatted to the [tidyverse style guide](https://style.tidyverse.org/index.html) automatically using the `styler` R package:

```r
library(styler)
styler::style_file("file/path/file.R", style = tidyverse_style)
```

#### Object names

Similar to filenames, within your code, object names should be descriptive, concise, and follow consistent naming conventions.

```R
# examples
respon_var
pred_var
```

See the `styler` [documentation](https://styler.r-lib.org/) for further information and  instructions on how to integrate `styler` into the RStudio GUI. 


---
## 2. Documenting Code

Properly documenting your code is essential for reproducible. It ensures that colleagues and reviewers fully understand your rational, methods, and project outputs. This repository provides templates for properly structured and documented  [R modules](https://github.com/bgcasey/code_standards/blob/main/templates/r_module.R) and [R functions]( [r_function.R](https://github.com/bgcasey/code_standards/blob/main/templates/r_function.R)) . While there are many ways to document code, all code documentation should include the following core components:

### Code header
Script should begin with a header that includes the following components:

| **Component** | **Description**                                                                                                    |
| ------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Title**     | A brief and descriptive name for the script that summarizes its purpose.                                           |
| **Author**    | The name of the person or team responsible for writing the code.                                                   |
| **Date**      | The creation or last modification date of the code, formatted as YYYY-MM-DD for consistency.                       |
| **Inputs**    | A list of the input data, files, or parameters required for the script to run, including file paths or formats.    |
| **Outputs**   | A description of the output produced by the script, including file names, formats, and what the results represent. |
| **Notes**     | A concise explanation of what the code does, its purpose, and any important details about its function.            |


Here is an example header in a YAML-like format:

```R
# ---
# title: "Title"
# author: "Your Name"
# created: "YYYY-MM-DD"
# inputs: [list the required input files]
# outputs: [list the output files produced by the script]
# notes: 
#   "This script performs [describe the main purpose of the script].
#   The script uses [briefly describe data or object inputs] to 
#   [briefly describe the main steps or processes]. The script
#   produces [describe the final output]."
# ---

```

## Code body

The body of your script should be divided into clear, well-labeled, numbered sections to make it easier for collaborators and reviewers to follow the logic of your code. Below is the recommended structure for the body of the code:

### Setup

Start your code with a setup section. This section includes all the necessary setup steps, such as loading packages and importing data. The setup will usually include the following subsections:

- **Load packages**: List all the required R packages, each accompanied by a comment explaining their use, and the package version to ensure reproducibility.

```R
## 1.1 Load packages ----
library(tidyverse)   # data manipulation and visualization (version: 1.3.1)
library(lubridate)   # date-time manipulation (version: 1.7.10)
```

- **Import data**: Describe the data and objects that are being loaded.

```R
## 1.2 Import data ----
# Description of data
# data <- read.csv("path/to/your/data.csv")
```

### Section headings

Each subsequent section of the script should include a numbered heading that describes the purpose of the section. This makes it easier for others to understand the logical flow of the script. For example:

```R
# 2. Data Cleaning ---- 
# This section handles the preprocessing and cleaning of the input 
# data. It removes missing values, filters unnecessary rows, and 
# transforms variables.
```

Each section should be subdivided further with descriptive numbered subheadings where necessary.

```R
## 2.1 Filter data ----
# This step filters the data to keep only relevant observations.
filtered_data <- data %>% filter(variable == "value")
```

## 3. Documenting Functions

Properly documenting your functions ensures that they are easy to understand and use, not just by yourself but by collaborators and future users. Below is a breakdown of the essential components of a well-documented function.

### Function Header

Each R function should include a detailed header that documents the function's purpose, its inputs (parameters), and the expected output. The provided template follows the [Roxygen2](https://roxygen2.r-lib.org/) style.

#### Components of a well-documented function

| **Component**   | **Description**                                                                                                                                                              |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Title**       | A brief, descriptive title of the function that summarizes its purpose.                                                                                                      |
| **Description** | A short explanation of what the function does, including the primary task or transformation it performs.                                                                     |
| **@param**      | A description of each parameter (argument) the function accepts. It should include the parameter name, its type, and what it represents or does.                             |
| **@return**     | A description of what the function returns, specifying the type of the returned object and what information or result it holds.                                              |
| **@example**    | A reproducible example showing how to use the function, including input data, the function call, and expected output. This helps users understand how to apply the function. |

### Function body

The body consists of the actual code that implements the function. Each major step should include a numbered comment explaining its purpose. This makes it easier for users to understand the function and debug any issues.

**Recommended structure for a function:**

```R
#' [Title of the Function]
#'
#' [Brief description of what the function does]
#'
#' @param [param_name] [Type and description of the parameter]
#' @param [param_name] [Type and description of the parameter]
#' @param [param_name] [Type and description of the parameter]
#' @return [Description of the return value or object]
#' 
#' @example # Example usage of the function
#' [Example data]
#' [Example function call]
#' [Example result printing]
[function_name] <- function([param1], [param2], 
                            [param3] = [default_value], 
                            [param4]) {
  # [Step 1: Description of what this step does]
  [code for step 1]
  
  # [Step 2: Description of what this step does]
  [code for step 2]
  
  # [Step 3: Description of what this step does]
  [code for step 3]
  
  # [Step 4: Description of what this step does]
  [code for step 4]
  
  # [Step 5: Description of what this step does]
  [code for step 5]
  
  return([result])
}
```

---
## 4. Project Directory Structure

It's recommended that data, code, and output files are contained and organized using the following project directory structure:

| **Item**                 | **Description**                   |
| ------------------------ | --------------------------------- |
| **0_data/**              | Raw and manipulated data          |
| ├── external/            | Raw data from external sources    |
| ├── manual/              | Data that has been manipulated    |
| **1_code/**              | Code and scripts for analysis     |
| ├── GEE/                 | Google Earth Engine scripts       |
| │   └── gee_git_clone.sh | Script to clone GEE repository    |
| ├── r_scripts/           | R scripts for data processing     |
| │   └── r_module.R       | Template R script                 |
| │   └── r_function.R     | Template R function               |
| **2_pipeline/**          | Data processing pipeline          |
| **3_output/**            | Results of analysis               |
| ├── data/                | Processed datasets                |
| ├── figures/             | Generated figures                 |
| ├── maps/                | Generated maps                    |
| ├── models/              | Model outputs                     |
| └── tables/              | Tables from analysis              |
| **4_writing/**           | Manuscript and reports            |
| ├── manuscript/          | Drafts of the manuscript          |
| └── reports/             | Reports and additional documents  |
| **README.md**            | Project overview and instructions |

A template repository can be found [here](https://github.com/bgcasey/rProject_template).  It can be used to generate new GitHub repositories with the same directory structure. While the template repository is designed for rProjects, projects in other programming environments should maintain a similar structure. 
