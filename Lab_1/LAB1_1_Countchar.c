#include <stdio.h>
#include <stdlib.h>

int main()
{
    FILE *fp;
    char ch;
    int chars = 0;
    int spaces = 0;
    int tabs = 0;
    int newlines = 0;
    char filename[] = "sample.txt"; // Name of the file

    // 1. Create and write to the file (optional, for demonstration)
    fp = fopen(filename, "w");
    if (fp == NULL)
    {
        printf("Error creating file %s\n", filename);
        exit(1);
    }
    fprintf(fp, "This is a sample text.\nIt has multiple lines.\tAnd tabs.\n");
    fclose(fp);

    // 2. Open the file in read mode
    fp = fopen(filename, "r");
    if (fp == NULL)
    {
        printf("Error opening file %s\n", filename);
        exit(1);
    }

    // 3. Read characters and count
    while ((ch = getc(fp)) != EOF)
    {
        chars++;
        if (ch == ' ')
        {
            spaces++;
        }
        else if (ch == '\t')
        {
            tabs++;
        }
        else if (ch == '\n')
        {
            newlines++;
        }
    }

    // 4. Close the file
    fclose(fp);

    // 5. Print the results
    printf("File: %s\n", filename);
    printf("Total characters: %d\n", chars);
    printf("Spaces: %d\n", spaces);
    printf("Tabs: %d\n", tabs);
    printf("Newlines: %d\n", newlines);

    return 0;
}