.. _api_Process:

Process
=======

Inherited: :ref:`Object<api_Object>`

.. _api_Process_description:

Description
-----------

This class provides a cross-platform interface for launching processes, reading standard output and error, waiting for start and finish, and managing the child process environment and working directory.

Example:

::

    Process p;
    p.start("myapp", {"--option", "value"});
    if (p.waitForStarted(5000)) {
        // ...
    }



.. _api_Process_public:

Public Methods
--------------

+-------------------------------------------+---------------------------------------------------------------------------------------------+
|                                           | :ref:`Process<api_Process_139a72db>` ()                                                     |
+-------------------------------------------+---------------------------------------------------------------------------------------------+
|                                           | :ref:`~Process<api_Process_0712d8a5>` ()                                                    |
+-------------------------------------------+---------------------------------------------------------------------------------------------+
|                                      void | :ref:`errorOccurred<api_Process_c26154ab>` (int  error)                                     |
+-------------------------------------------+---------------------------------------------------------------------------------------------+
|                                       int | :ref:`exitCode<api_Process_7d8235e9>` () const                                              |
+-------------------------------------------+---------------------------------------------------------------------------------------------+
|                                      void | :ref:`finished<api_Process_12936dac>` (int  exitCode)                                       |
+-------------------------------------------+---------------------------------------------------------------------------------------------+
|                                      bool | :ref:`isRunning<api_Process_4e7c15a2>` () const                                             |
+-------------------------------------------+---------------------------------------------------------------------------------------------+
|                                      void | :ref:`kill<api_Process_cf8a7d19>` ()                                                        |
+-------------------------------------------+---------------------------------------------------------------------------------------------+
|               :ref:`TString<api_TString>` | :ref:`readAllStandardError<api_Process_b64082e5>` ()                                        |
+-------------------------------------------+---------------------------------------------------------------------------------------------+
|               :ref:`TString<api_TString>` | :ref:`readAllStandardOutput<api_Process_f5de08c4>` ()                                       |
+-------------------------------------------+---------------------------------------------------------------------------------------------+
|                                      void | :ref:`readyReadStandardError<api_Process_e162490d>` ()                                      |
+-------------------------------------------+---------------------------------------------------------------------------------------------+
|                                      void | :ref:`readyReadStandardOutput<api_Process_0ad8e495>` ()                                     |
+-------------------------------------------+---------------------------------------------------------------------------------------------+
|                                      void | :ref:`setProcessEnvironment<api_Process_237809ed>` (const ProcessEnvironment & environment) |
+-------------------------------------------+---------------------------------------------------------------------------------------------+
|                                      void | :ref:`setWorkingDirectory<api_Process_4b091e75>` (const TString & directory)                |
+-------------------------------------------+---------------------------------------------------------------------------------------------+
|                                      bool | :ref:`start<api_Process_48e3d762>` (const TString & program, const StringList & arguments)  |
+-------------------------------------------+---------------------------------------------------------------------------------------------+
|  :ref:`Process::State<api_Process_State>` | :ref:`state<api_Process_85e16dc4>` () const                                                 |
+-------------------------------------------+---------------------------------------------------------------------------------------------+
|                                      void | :ref:`terminate<api_Process_7fde1905>` ()                                                   |
+-------------------------------------------+---------------------------------------------------------------------------------------------+
|                                      bool | :ref:`waitForFinished<api_Process_e52a0196>` (int  timeoutMs = -1)                          |
+-------------------------------------------+---------------------------------------------------------------------------------------------+
|                                      bool | :ref:`waitForStarted<api_Process_a1cd086e>` (int  timeoutMs = -1)                           |
+-------------------------------------------+---------------------------------------------------------------------------------------------+

.. _api_Process_enums:

Public Enums
------------

.. _api_Process_Error:

**enum Process::Error**

Error codes returned or emitted by the Process.

+------------------------+-------+----------------------------------------------------------+
|               Constant | Value | Description                                              |
+------------------------+-------+----------------------------------------------------------+
| Process::FailedToStart | 0     | Failed to launch the child process.                      |
+------------------------+-------+----------------------------------------------------------+
|       Process::Crashed | 1     | The child process crashed or was terminated by a signal. |
+------------------------+-------+----------------------------------------------------------+
|      Process::Timedout | 2     | An operation timed out.                                  |
+------------------------+-------+----------------------------------------------------------+
|     Process::ReadError | 3     | Error occurred while reading from process pipes.         |
+------------------------+-------+----------------------------------------------------------+
|    Process::WriteError | 4     | Error occurred while writing to process stdin.           |
+------------------------+-------+----------------------------------------------------------+
|  Process::UnknownError | 5     | An unspecified error occurred.                           |
+------------------------+-------+----------------------------------------------------------+

.. _api_Process_State:

**enum Process::State**

Process lifecycle state. Describes the current lifecycle stage of the managed child process.

+---------------------+-------+-----------------------------------+
|            Constant | Value | Description                       |
+---------------------+-------+-----------------------------------+
| Process::NotRunning | 0     | no process is running.            |
+---------------------+-------+-----------------------------------+
|   Process::Starting | 1     | process start has been initiated. |
+---------------------+-------+-----------------------------------+
|    Process::Running | 2     | process is currently running.     |
+---------------------+-------+-----------------------------------+
|   Process::Finished | 3     | process has terminated.           |
+---------------------+-------+-----------------------------------+



.. _api_Process_static:

Static Methods
--------------

+-------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  bool | :ref:`openUrl<api_Process_fb48c9e2>` (const TString & url)                                                                                                                   |
+-------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  bool | :ref:`startDetached<api_Process_a4f0c173>` (const TString & program, const StringList & arguments, const TString & workingDirectory, const ProcessEnvironment & environment) |
+-------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

.. _api_Process_methods:

Methods Description
-------------------

.. _api_Process_139a72db:

**Process::Process** ()

Construct a new Process object.

----

.. _api_Process_0712d8a5:

**Process::~Process** ()

Destructor; terminates running process and frees resources.

----

.. _api_Process_c26154ab:

 void **Process::errorOccurred** (int  *error*)

Emit an signal with the given *error* code.

The *error* parameter is one of the Process::Error enumeration values.

----

.. _api_Process_7d8235e9:

 int **Process::exitCode** () const

Retrieve the exit code of the finished process.

If the process has finished, returns its exit code; otherwise returns the last known exit code value (or -1 if unknown).

----

.. _api_Process_12936dac:

 void **Process::finished** (int  *exitCode*)

Emit signal when the process exits.

The *exitCode* parameter contains the child's exit status.

----

.. _api_Process_4e7c15a2:

 bool **Process::isRunning** () const

Check whether the process is currently running.

Convenience helper returning true when the internal state is `Process::State::Running`.

----

.. _api_Process_cf8a7d19:

 void **Process::kill** ()

This unconditionally terminates the process. Use only when `terminate()` did not cause the process to exit in a timely manner.

----

.. _api_Process_fb48c9e2:

 bool **Process::openUrl** (:ref:`TString<api_TString>` & *url*)

Open the given *url* using the system default handler; returns true if succeed.

----

.. _api_Process_b64082e5:

 :ref:`TString<api_TString>`  **Process::readAllStandardError** ()

Return and clear the accumulated standard error buffer.

Returns all data read from the child process's stderr since the last call and clears the internal buffer.

----

.. _api_Process_f5de08c4:

 :ref:`TString<api_TString>`  **Process::readAllStandardOutput** ()

Return and clear the accumulated standard output buffer.

Returns all data read from the child process's stdout since the last call and clears the internal buffer.

----

.. _api_Process_e162490d:

 void **Process::readyReadStandardError** ()

Emit when stderr data is available.

----

.. _api_Process_0ad8e495:

 void **Process::readyReadStandardOutput** ()

Emit when stdout data is available.

----

.. _api_Process_237809ed:

 void **Process::setProcessEnvironment** (:ref:`ProcessEnvironment<api_ProcessEnvironment>` & *environment*)

Set *environment* variables for the child process.

----

.. _api_Process_4b091e75:

 void **Process::setWorkingDirectory** (:ref:`TString<api_TString>` & *directory*)

Set the working *directory* for the process to be started.

----

.. _api_Process_48e3d762:

 bool **Process::start** (:ref:`TString<api_TString>` & *program*, StringList & *arguments*)

Start a process and begin monitoring it.

Attempts to start the specified *program* with arguments. On success the process state becomes `Running` and a background monitor thread is spawned to read output and detect process termination.

Returns true on success, false otherwise.

----

.. _api_Process_a4f0c173:

 bool **Process::startDetached** (:ref:`TString<api_TString>` & *program*, StringList & *arguments*, :ref:`TString<api_TString>` & *workingDirectory*, :ref:`ProcessEnvironment<api_ProcessEnvironment>` & *environment*)

Start a detached process (no parent-child ties to this process).

Starts *program* with *arguments* in a separate process group/session and returns immediately. Optionally sets the *workingDirectory* and the provided *environment* variables for the new process.

Returns true if the detached process was launched successfully.

----

.. _api_Process_85e16dc4:

 :ref:`Process::State<api_Process::State>`  **Process::state** () const

Get the current process state.

Returns one of the `Process::State` enumeration values describing the lifecycle state of the child process.

----

.. _api_Process_7fde1905:

 void **Process::terminate** ()

Sends a termination request to the process. This is a graceful request; it does not force immediate termination.

----

.. _api_Process_e52a0196:

 bool **Process::waitForFinished** (int  *timeoutMs* = -1)

Wait for the process to finish.

Blocks until the monitored process has finished or until *timeoutMs* milliseconds have passed. A negative *timeoutMs* will wait without polling and join the monitor thread.

Returns true if the process has finished.

----

.. _api_Process_a1cd086e:

 bool **Process::waitForStarted** (int  *timeoutMs* = -1)

Wait for the process to start.

Blocks until the process has started or the optional *timeoutMs* milliseconds have elapsed. A negative *timeoutMs* means wait forever. Returns true if the process started successfully.


