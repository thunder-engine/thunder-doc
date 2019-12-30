.. _api_Log:
Log Class
================

Inherited: None

.. _api_Log_description:
Description
-----------

The Log is used whenever the developer needs to write out debugging or tracing information to a file or console.

Common usecase:



.. _api_Log_public:
Public Methods
--------------

+-----------------------+-------------------------------------------------------------+
|                       | :ref:`Log<api_Log_Log>` (Log::LogTypes  type)               |
+-----------------------+-------------------------------------------------------------+
|                       | :ref:`~Log<api_Log_~Log>` ()                                |
+-----------------------+-------------------------------------------------------------+
| :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_operator<<>` (bool  b)             |
+-----------------------+-------------------------------------------------------------+
| :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_operator<<>` (uint8_t  c)          |
+-----------------------+-------------------------------------------------------------+
| :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_operator<<>` (int8_t  c)           |
+-----------------------+-------------------------------------------------------------+
| :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_operator<<>` (uint16_t  s)         |
+-----------------------+-------------------------------------------------------------+
| :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_operator<<>` (int16_t  s)          |
+-----------------------+-------------------------------------------------------------+
| :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_operator<<>` (uint32_t  i)         |
+-----------------------+-------------------------------------------------------------+
| :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_operator<<>` (int32_t  i)          |
+-----------------------+-------------------------------------------------------------+
| :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_operator<<>` (uint64_t  i)         |
+-----------------------+-------------------------------------------------------------+
| :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_operator<<>` (int64_t  i)          |
+-----------------------+-------------------------------------------------------------+
| :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_operator<<>` (float  f)            |
+-----------------------+-------------------------------------------------------------+
| :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_operator<<>` (double  d)           |
+-----------------------+-------------------------------------------------------------+
| :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_operator<<>` (const char * string) |
+-----------------------+-------------------------------------------------------------+

.. _api_Log_static:
Static Methods
--------------

+---------------------------------------+-------------------------------------------------------------------------+
| :ref:`ILogHandler<api_ILogHandler>` * | :ref:`handler<api_Log_handler>` ()                                      |
+---------------------------------------+-------------------------------------------------------------------------+
|                 :ref:`void<api_void>` | :ref:`overrideHandler<api_Log_overrideHandler>` (ILogHandler * handler) |
+---------------------------------------+-------------------------------------------------------------------------+
|                 :ref:`void<api_void>` | :ref:`setLogLevel<api_Log_setLogLevel>` (Log::LogTypes  level)          |
+---------------------------------------+-------------------------------------------------------------------------+

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

:ref:`ILogHandler<api_ILogHandler>` * **Log::handler** ()

Returns ILogHandler object if present; otherwise returns nullptr.

----

.. _api_Log_overrideHandler:

:ref:`void<api_void>`  **Log::overrideHandler** (:ref:`ILogHandler<api_ILogHandler>` * *handler*)

Set a new Log *handler*. This method can be used in case if a developer would need to move logging stream to someplace. For example to the console.

----

.. _api_Log_setLogLevel:

:ref:`void<api_void>`  **Log::setLogLevel** (:ref:`Log::LogTypes<api_Log::LogTypes>`  *level*)

Set current log *level* output. Messages wich are below this *level* will be descarded.

----

.. _api_Log_operator<<:

:ref:`Log<api_Log>` & **Log::operator<<** (:ref:`bool<api_bool>`  *b*)

Writes the *b*oolean value, *b*, to the stream and returns a reference to the stream.

----

.. _api_Log_operator<<:

:ref:`Log<api_Log>` & **Log::operator<<** (:ref:`uint8_t<api_uint8_t>`  *c*)

Writes the unsinged 8 bit integer value, *c*, to the stream and returns a reference to the stream.

----

.. _api_Log_operator<<:

:ref:`Log<api_Log>` & **Log::operator<<** (:ref:`int8_t<api_int8_t>`  *c*)

Writes the singed 8 bit integer value, *c*, to the stream and returns a reference to the stream.

----

.. _api_Log_operator<<:

:ref:`Log<api_Log>` & **Log::operator<<** (:ref:`uint16_t<api_uint16_t>`  *s*)

Writes the unsinged 16 bit integer value, *s*, to the *s*tream and returns a reference to the *s*tream.

----

.. _api_Log_operator<<:

:ref:`Log<api_Log>` & **Log::operator<<** (:ref:`int16_t<api_int16_t>`  *s*)

Writes the *s*inged 16 bit integer value, *s*, to the *s*tream and returns a reference to the *s*tream.

----

.. _api_Log_operator<<:

:ref:`Log<api_Log>` & **Log::operator<<** (:ref:`uint32_t<api_uint32_t>`  *i*)

Writes the unsinged 32 bit *i*nteger value, *i*, to the stream and returns a reference to the stream.

----

.. _api_Log_operator<<:

:ref:`Log<api_Log>` & **Log::operator<<** (:ref:`int32_t<api_int32_t>`  *i*)

Writes the singed 32 bit *i*nteger value, *i*, to the stream and returns a reference to the stream.

----

.. _api_Log_operator<<:

:ref:`Log<api_Log>` & **Log::operator<<** (:ref:`uint64_t<api_uint64_t>`  *i*)

Writes the unsinged 64 bit *i*nteger value, *i*, to the stream and returns a reference to the stream.

----

.. _api_Log_operator<<:

:ref:`Log<api_Log>` & **Log::operator<<** (:ref:`int64_t<api_int64_t>`  *i*)

Writes the singed 64 bit *i*nteger value, *i*, to the stream and returns a reference to the stream.

----

.. _api_Log_operator<<:

:ref:`Log<api_Log>` & **Log::operator<<** (:ref:`float<api_float>`  *f*)

Writes the *f*loat value, *f*, to the stream and returns a reference to the stream.

----

.. _api_Log_operator<<:

:ref:`Log<api_Log>` & **Log::operator<<** (:ref:`double<api_double>`  *d*)

Writes the float value with *d*ouble precision, *d*, to the stream and returns a reference to the stream.

----

.. _api_Log_operator<<:

:ref:`Log<api_Log>` & **Log::operator<<** (:ref:`char<api_char>` * *string*)

Writes the '\0'-terminated *string*, to the stream and returns a reference to the stream.

----


