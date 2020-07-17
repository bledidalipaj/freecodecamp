def arithmetic_arranger(problems, show_solution=False):
    # the limit is five problems
    if len(problems) > 5:
        return "Error: Too many problems."

    arranged_as = []
    arranged_bs = []
    arranged_reses = []
    dashes = []

    for problem in problems:
        a, operator, b = problem.strip().split()

        is_valid, error = is_properly_formatted(a, operator, b)

        if is_valid:
            max_length = get_max_length(a, operator, b)

            arranged_a = a.rjust(max_length, " ")
            arranged_b = operator + b.rjust(max_length - 1, " ")

            res = eval(problem)
            arranged_res = str(res).rjust(max_length, " ")

            arranged_as.append(arranged_a)
            arranged_bs.append(arranged_b)
            arranged_reses.append(arranged_res)
            dashes.append("-" * max_length)
        else:
            return error

    # construct answer
    ans = ""

    ans += "    ".join(arranged_as)
    ans += "\n"
    ans += "    ".join(arranged_bs)
    ans += "\n"
    ans += "    ".join(dashes)

    if show_solution:
        ans += "\n"
        ans += "    ".join(arranged_reses)
    return ans


def is_properly_formatted(a, operator, b):
    """
    Check if problem is formatted properly.
    """

    error = ""

    # accepted operators are '+' and '-'
    if operator not in ["+", "-"]:
        error = "Error: Operator must be '+' or '-'."
        return False, error

    # numbers must only contain digits
    if not a.isdigit() or not b.isdigit():
        error = "Error: Numbers must only contain digits."
        return False, error

    # each number has a max of four digits
    if len(a) > 4 or len(b) > 4:
        error = "Error: Numbers cannot be more than four digits."
        return False, error

    return True, error


def get_max_length(a, operator, b):
    max_length = max(len(a), len(b)) + 2
    return max_length
