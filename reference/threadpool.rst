.. _api_ThreadPool:

ThreadPool
==========

Inherited: None

.. _api_ThreadPool_description:

Description
-----------



.. _api_ThreadPool_public:

Public Methods
--------------

+-----------+-------------------------------------------------------------------+
|  uint32_t | :ref:`maxThreads<api_ThreadPool_e952ca7d>` () const               |
+-----------+-------------------------------------------------------------------+
|      void | :ref:`setMaxThreads<api_ThreadPool_63bdf847>` (uint32_t  number)  |
+-----------+-------------------------------------------------------------------+
|      bool | :ref:`waitForDone<api_ThreadPool_48fc9ae0>` (int32_t  msecs = -1) |
+-----------+-------------------------------------------------------------------+



.. _api_ThreadPool_static:

Static Methods
--------------

+-----------+-------------------------------------------------------+
|  uint32_t | :ref:`optimalThreadCount<api_ThreadPool_81e6f7c4>` () |
+-----------+-------------------------------------------------------+

.. _api_ThreadPool_methods:

Methods Description
-------------------

.. _api_ThreadPool_e952ca7d:

 uint32_t **ThreadPool::maxThreads** () const

Returns the max number of threads allocated to work.

**See also** setMaxThreads().

----

.. _api_ThreadPool_81e6f7c4:

 uint32_t **ThreadPool::optimalThreadCount** ()

Returns the optimal thread count for the current system. This value is based on the number of CPU cores.

----

.. _api_ThreadPool_63bdf847:

 void **ThreadPool::setMaxThreads** (uint32_t  *number*)

Sets the max *number* of threads allocated to work.

**See also** maxThreads().

----

.. _api_ThreadPool_48fc9ae0:

 bool **ThreadPool::waitForDone** (int32_t  *msecs* = -1)

Waits up to *msecs* milliseconds for all threads to exit and removes all threads from the thread pool. Returns true if all threads were removed; otherwise it returns false. If *msecs* is -1 (the default), the timeout is ignored (waits for the last thread to exit).


