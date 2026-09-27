.. _api_Backtrace:

Backtrace
=========

Inherited: None

.. _api_Backtrace_description:

Description
-----------

`Backtrace` provides a small set of helpers to install a crash handler that logs a stack backtrace on fatal signals/exceptions and to obtain a programmatic backtrace for diagnostic purposes.



.. _api_Backtrace_public:

Public Methods
--------------

None



.. _api_Backtrace_static:

Static Methods
--------------

+-------------+--------------------------------------------------------------------+
|  StringList | :ref:`getBacktrace<api_Backtrace_bd693250>` (uint32_t  skipFrames) |
+-------------+--------------------------------------------------------------------+
|        void | :ref:`installCrashHandler<api_Backtrace_6705f24c>` ()              |
+-------------+--------------------------------------------------------------------+

.. _api_Backtrace_methods:

Methods Description
-------------------

.. _api_Backtrace_bd693250:

 StringList **Backtrace::getBacktrace** (uint32_t  *skipFrames*)

Install crash handlers that log a backtrace on fatal errors.

Capture a stack backtrace as a list of human-readable frames.

The *skipFrames* parameter omits the specified number of initial frames (useful to remove the getBacktrace() call itself and the crash handler frames). Returns a `StringList` of frame descriptions.

----

.. _api_Backtrace_6705f24c:

 void **Backtrace::installCrashHandler** ()

Install platform-specific crash handlers that log backtraces.

After calling this function, unhandled exceptions or fatal signals (such as SIGSEGV) will be intercepted and a human-readable backtrace will be written to the application log.


