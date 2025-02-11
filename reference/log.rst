.. _api_Log:

Log
===

Inherited: None

.. _api_Log_description:

Description
-----------

The Log is used whenever the developer needs to write out debugging or tracing information to a file or console.

Common usecase:

::

    Log(Log::ERR) << "Loading level:" << 1;



.. _api_Log_public:

Public Methods
--------------

+------------------------+--------------------------------------------------------------------+
|                        | :ref:`Log<api_Log_Log>` (Log::LogTypes  type)                      |
+------------------------+--------------------------------------------------------------------+
|                        | :ref:`~Log<api_Log_~Log>` ()                                       |
+------------------------+--------------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_operator<<>` (bool  b)                    |
+------------------------+--------------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_operator<<>` (char  c)                    |
+------------------------+--------------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_operator<<>` (const char * string)        |
+------------------------+--------------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_operator<<>` (const std::string & string) |
+------------------------+--------------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_operator<<>` (const void * value)         |
+------------------------+--------------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_operator<<>` (double  d)                  |
+------------------------+--------------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_operator<<>` (float  f)                   |
+------------------------+--------------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_operator<<>` (int  i)                     |
+------------------------+--------------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_operator<<>` (long long  i)               |
+------------------------+--------------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_operator<<>` (short  s)                   |
+------------------------+--------------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_operator<<>` (unsigned char  c)           |
+------------------------+--------------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_operator<<>` (unsigned int  i)            |
+------------------------+--------------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_operator<<>` (unsigned long long  i)      |
+------------------------+--------------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_operator<<>` (unsigned short  s)          |
+------------------------+--------------------------------------------------------------------+

.. _api_Log_enums:

Public Enums
------------

.. _api_Log_LogTypes:

**enum Log::LogTypes**

This enum defines the lavel of logging.

+----------+-------+-------------------------------------------------------+
| Constant | Value | Description                                           |
+----------+-------+-------------------------------------------------------+
| Log::CRT | 0     | Critical logging. For use with critical failures.     |
+----------+-------+-------------------------------------------------------+
| Log::ERR | 1     | Error logging. For use with unrecoverable failures.   |
+----------+-------+-------------------------------------------------------+
| Log::WRN | 2     | Warning logging. For use with recoverable failures.   |
+----------+-------+-------------------------------------------------------+
| Log::INF | 3     | Informational logging. Should be desabled in release. |
+----------+-------+-------------------------------------------------------+
| Log::DBG | 4     | Debug logging. Should be desabled in release.         |
+----------+-------+-------------------------------------------------------+



.. _api_Log_static:

Static Methods
--------------

+--------------------------------------+------------------------------------------------------------------------+
|  :ref:`LogHandler<api_LogHandler>` * | :ref:`handler<api_Log_handler>` ()                                     |
+--------------------------------------+------------------------------------------------------------------------+
|                                 void | :ref:`overrideHandler<api_Log_overrideHandler>` (LogHandler * handler) |
+--------------------------------------+------------------------------------------------------------------------+
|                                 void | :ref:`setLogLevel<api_Log_setLogLevel>` (Log::LogTypes  level)         |
+--------------------------------------+------------------------------------------------------------------------+

.. _api_Log_methods:

Methods Description
-------------------

.. _api_Log_Log:

**Log::Log** (:ref:`Log::LogTypes<api_Log::LogTypes>`  *type*)

Constructs a log stream that writes to the handler for the message *type*.

----

.. _api_Log_~Log:

**Log::~Log** ()

Flushes any pending data to be written and destroys the log stream.

----

.. _api_Log_handler:

 :ref:`LogHandler<api_LogHandler>` * **Log::handler** ()

Returns LogHandler object if present; otherwise returns nullptr.

----

.. _api_Log_overrideHandler:

 void **Log::overrideHandler** (:ref:`LogHandler<api_LogHandler>` * *handler*)

Set a new Log *handler*. This method can be used in case if a developer would need to move logging stream to someplace. For example to the console.

----

.. _api_Log_setLogLevel:

 void **Log::setLogLevel** (:ref:`Log::LogTypes<api_Log::LogTypes>`  *level*)

Set current log *level* output. Messages wich are below this *level* will be descarded.

----

.. _api_Log_operator<<:

 :ref:`Log<api_Log>` & **Log::operator<<** (bool  *b*)

Writes the *b*oolean value, *b*, to the stream and returns a reference to the stream.

.. _api_Log_operator<<:

 :ref:`Log<api_Log>` & **Log::operator<<** (char  *c*)

Writes the singed 8 bit integer value, *c*, to the stream and returns a reference to the stream.

.. _api_Log_operator<<:

 :ref:`Log<api_Log>` & **Log::operator<<** (char * *string*)

Writes the '\0'-terminated *string*, to the stream and returns a reference to the stream.

.. _api_Log_operator<<:

 :ref:`Log<api_Log>` & **Log::operator<<** (std::string & *string*)

Writes the text *string*, to the stream and returns a reference to the stream.

.. _api_Log_operator<<:

 :ref:`Log<api_Log>` & **Log::operator<<** (void * *value*)

Writes the pointer *value*, to the stream and returns a reference to the stream.

.. _api_Log_operator<<:

 :ref:`Log<api_Log>` & **Log::operator<<** (:ref:`double<api_double>`  *d*)

Writes the float value with *d*ouble precision, *d*, to the stream and returns a reference to the stream.

.. _api_Log_operator<<:

 :ref:`Log<api_Log>` & **Log::operator<<** (float  *f*)

Writes the *f*loat value, *f*, to the stream and returns a reference to the stream.

.. _api_Log_operator<<:

 :ref:`Log<api_Log>` & **Log::operator<<** (int  *i*)

Writes the singed 32 bit *i*nteger value, *i*, to the stream and returns a reference to the stream.

.. _api_Log_operator<<:

 :ref:`Log<api_Log>` & **Log::operator<<** (:ref:`long<api_long>`  *i*)

Writes the singed 64 bit *i*nteger value, *i*, to the stream and returns a reference to the stream.

.. _api_Log_operator<<:

 :ref:`Log<api_Log>` & **Log::operator<<** (:ref:`short<api_short>`  *s*)

Writes the *s*inged 16 bit integer value, *s*, to the *s*tream and returns a reference to the *s*tream.

.. _api_Log_operator<<:

 :ref:`Log<api_Log>` & **Log::operator<<** (char  *c*)

Writes the unsinged 8 bit integer value, *c*, to the stream and returns a reference to the stream.

.. _api_Log_operator<<:

 :ref:`Log<api_Log>` & **Log::operator<<** (int  *i*)

Writes the unsinged 32 bit *i*nteger value, *i*, to the stream and returns a reference to the stream.

.. _api_Log_operator<<:

 :ref:`Log<api_Log>` & **Log::operator<<** (:ref:`long<api_long>`  *i*)

Writes the unsinged 64 bit *i*nteger value, *i*, to the stream and returns a reference to the stream.

.. _api_Log_operator<<:

 :ref:`Log<api_Log>` & **Log::operator<<** (:ref:`short<api_short>`  *s*)

Writes the unsinged 16 bit integer value, *s*, to the *s*tream and returns a reference to the *s*tream.


