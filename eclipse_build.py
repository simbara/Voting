#!/usr/local/bin/python
"""This python module is an eclipse friendly pyjsbuild.
To make it work do the following steps:
- Drop this file in the pyjamas folder
- Configure the python file you want to pyjs build in eclipse with:
right-click 'that file' -> Properties
left-click "Run/Debug Settings" -> "New ..." Launch Configuration"

Give it a sensible name,
locate the project where the file currently under is,
pinpoint the file as the main module

Then under tab arguments add as 'VM arguments' this file.
Since I have pyjamas checked out as a project mine says:
${workspace_loc}/pyjamas/eclipse_build.py

Set working directory to 'other' with the following value:
${container_loc}

Read the rest of this script to see if it needs tweaking (mainly the things in 
capital letters).
"""

ARGUMENTS = ['-d'] # Do not use -I argument as this is already used.

import ast, os, sys 
# If you decide to move this file anywhere else but in the root pyjamas folder
# set the following var to wherever your pyjamas folder is
__PYJAMAS_FOLDER = '.'

__BOOTSTRAP_FILE = 'bootstrap.py'
__VERSION_IDENTIFIER = 'version'
__PGEN = 'pgen'
__SRC_PATH = ['pyjs', 'src']
__LIBRARY = 'library'
__ADD_ONS = 'addons'


def _pyjspath():
    "Return the root folder"
    full_path = os.path.abspath(__file__)
    full_path = os.path.split(full_path)[0]
    full_path = os.path.join(full_path, __PYJAMAS_FOLDER)
    return(full_path)

def _pyjsversion():
    "Return the version as found in the bootstrap file"
    folder_root = _pyjspath()
    bootstrap = os.path.join(folder_root, __BOOTSTRAP_FILE)
    
    if __BOOTSTRAP_FILE in os.listdir(folder_root):
        version = None
        parsed_ast = ast.parse(open(bootstrap).read())
        for node in (ast.walk(parsed_ast)):
            if 'targets' in dir(node):
                if node.targets[0].id == __VERSION_IDENTIFIER:
                    version = node.value.s
                    break
    else:
        text = 'File %s not found' % bootstrap
        raise(ValueError(text))
    
    if version == None:
        text = "Can not find identifier '%s' in file '%s'"
        text = text % (__VERSION_IDENTIFIER, bootstrap)
        raise(ValueError(text))
    else:
        return(version)

def _return_pyjs():
    "Set the path environment"
    root = _pyjspath()
    path_src = os.path.join(root, *__SRC_PATH)
    path_pgen = os.path.join(root, __PGEN)
    path_library = os.path.join(root, __LIBRARY)
    path_addons = os.path.join(root, __ADD_ONS)
    
    sys.path[0:0] = [path_src, path_pgen]
    
    import pyjs
    pyjs.pyjspth = root
    pyjs.path += [path_library, path_addons]
    import pyjs.browser
    
    return(pyjs)
    
def _run_translator():
    "Run the translator"
    pyjs = _return_pyjs()
    pyjs.browser.build_script()

def _replace_argvs():
    build_module = sys.argv.pop(-1)
    include_path, module = os.path.split(build_module)
    include = '-I %s' % include_path
    
    build_arguments = ARGUMENTS + [include, module]
    for argument in build_arguments:
        sys.argv.append(argument)
        

if __name__ == '__main__':
    if "--version" in sys.argv:
        TEXT = 'Version:%s' % _pyjsversion()
        print(TEXT)
    else:
        _replace_argvs()
        print(sys.argv)
        _run_translator()
    sys.exit(0)
