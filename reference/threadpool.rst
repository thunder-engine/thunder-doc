.. _api_ThreadPool:
ThreadPool Class
================

Inherited: :ref:`Object<api_Object>`

.. _api_ThreadPool_description:
Description
-----------



.. _api_ThreadPool_public:
Public Methods
--------------

+-------------------------------+-----------------------------------------------------------------------+
| :ref:`uint32_t<api_uint32_t>` | :ref:`maxThreads<api_ThreadPool_maxThreads>` () const                 |
+-------------------------------+-----------------------------------------------------------------------+
|         :ref:`void<api_void>` | :ref:`setMaxThreads<api_ThreadPool_setMaxThreads>` (uint32_t  number) |
+-------------------------------+-----------------------------------------------------------------------+
|         :ref:`void<api_void>` | :ref:`start<api_ThreadPool_start>` (Object & object)                  |
+-------------------------------+-----------------------------------------------------------------------+
|         :ref:`bool<api_bool>` | :ref:`waitForDone<api_ThreadPool_waitForDone>` (int32_t  msecs = -1)  |
+-------------------------------+-----------------------------------------------------------------------+



.. _api_ThreadPool_static:
Static Methods
--------------

+-------------------------------+-----------------------------------------------------------------+
| :ref:`uint32_t<api_uint32_t>` | :ref:`optimalThreadCount<api_ThreadPool_optimalThreadCount>` () |
+-------------------------------+-----------------------------------------------------------------+

.. _api_ThreadPool_methods:
Methods Description
-------------------

.. _api_ThreadPool_maxThreads:

:ref:`uint32_t<api_uint32_t>`  **ThreadPool::maxThreads** () const

Returns the max number of threads allocated to work.

**See also** setMaxThreads().

----

.. _api_ThreadPool_optimalThreadCount:

:ref:`uint32_t<api_uint32_t>`  **ThreadPool::optimalThreadCount** ()

Returns the optimal thread count for the current system. This value is based on the number of CPU cores.

----

.. _api_ThreadPool_setMaxThreads:

:ref:`void<api_void>`  **ThreadPool::setMaxThreads** (:ref:`uint32_t<api_uint32_t>`  *number*)

Sets the max *number* of threads allocated to work.

**See also** maxThreads().

----

.. _api_ThreadPool_start:

:ref:`void<api_void>`  **ThreadPool::start** (:ref:`Object<api_Object>` & *object*)

Pushes an *object* to thread pool. In case of any free worker available executes task immediately.

----

.. _api_ThreadPool_waitForDone:

:ref:`bool<api_bool>`  **ThreadPool::waitForDone** (:ref:`int32_t<api_int32_t>`  *msecs* = -1)

Waits up to *msecs* milliseconds for all threads to exit and removes all threads from the thread pool. Returns true if all threads were removed; otherwise it returns false. If *msecs* is -1 (the default), the timeout is ignored (waits for the last thread to exit).

----


